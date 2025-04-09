
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X } from "lucide-react";

interface FileUploadProps {
  onFileSelected: (file: File) => void;
  acceptedFileTypes: string;
  maxSizeMB: number;
}

const FileUpload = ({ onFileSelected, acceptedFileTypes, maxSizeMB }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    const fileType = file.type.toLowerCase();
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    const acceptedTypes = acceptedFileTypes
      .split(',')
      .map(type => type.trim().toLowerCase())
      .filter(type => type);
    
    const isTypeAccepted = acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        // Extension check
        return `.${fileExtension}` === type;
      } else {
        // MIME type check
        return fileType.includes(type.replace('*', ''));
      }
    });

    if (!isTypeAccepted) {
      setFileError(`File type not accepted. Please upload ${acceptedFileTypes}`);
      return false;
    }

    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setFileError(`File is too large. Maximum size is ${maxSizeMB}MB`);
      return false;
    }

    setFileError(null);
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
      onFileSelected(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <div
        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          dragActive
            ? "border-[#C3FF44] bg-[#C3FF44]/10"
            : selectedFile
            ? "border-green-500/40 bg-green-500/5"
            : "border-white/20 hover:bg-white/5"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={selectedFile ? undefined : handleClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChange}
          accept={acceptedFileTypes}
        />

        {selectedFile ? (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium text-white">{selectedFile.name}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white/70 hover:text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-xs text-white/60">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Upload className="w-6 h-6 text-white/60" />
            <p className="text-sm text-white/60">
              Drag & drop your bill, or <span className="text-[#C3FF44]">browse</span>
            </p>
            <p className="text-xs text-white/40">
              Supports PDF, JPG, JPEG, PNG (max {maxSizeMB}MB)
            </p>
          </div>
        )}
      </div>

      {fileError && (
        <p className="mt-2 text-sm text-red-400">{fileError}</p>
      )}
    </div>
  );
};

export default FileUpload;
