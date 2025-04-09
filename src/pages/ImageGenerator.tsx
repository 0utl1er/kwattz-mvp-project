
import { useState } from "react";
import { RunwareService, GeneratedImage } from "@/services/runwareService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2, Download, Copy } from "lucide-react";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const KWATTZ_STYLE = "dark blue (#111F54) and bright green (#C3FF44) color scheme, modern, minimalist, tech style";

const DEFAULT_PROMPTS = [
  `A modern, minimalist illustration of a smart home with energy efficiency indicators, using ${KWATTZ_STYLE}`,
  `A stylized electric bill being scanned or analyzed by AI, with data visualization elements, ${KWATTZ_STYLE}`,
  `A piggy bank with an electric bolt, representing energy savings, ${KWATTZ_STYLE}`,
  `A dashboard showing energy consumption graphs and trends, ${KWATTZ_STYLE}`,
  `A shield protecting a house, symbolizing energy efficiency protection, ${KWATTZ_STYLE}`
];

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState("");
  const [runwareService, setRunwareService] = useState<RunwareService | null>(null);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPTS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const handleConnect = () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Runware API key to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      const service = new RunwareService(apiKey);
      setRunwareService(service);
      toast({
        title: "Connected!",
        description: "Successfully connected to the Runware service.",
      });
    } catch (error) {
      console.error("Failed to connect:", error);
      toast({
        title: "Connection Failed",
        description: "Could not connect to Runware service. Please check your API key.",
        variant: "destructive",
      });
    }
  };

  const generateImage = async () => {
    if (!runwareService) {
      toast({
        title: "Not Connected",
        description: "Please connect to the Runware service first.",
        variant: "destructive",
      });
      return;
    }

    if (!prompt) {
      toast({
        title: "Prompt Required",
        description: "Please enter a prompt for image generation.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await runwareService.generateImage({ positivePrompt: prompt });
      setGeneratedImages((prev) => [result, ...prev]);
      toast({
        title: "Image Generated",
        description: "Your image has been successfully generated.",
      });
    } catch (error) {
      console.error("Image generation failed:", error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: "URL Copied",
      description: "Image URL copied to clipboard.",
    });
  };

  const downloadImage = async (url: string, index: number) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `kwattz-image-${index + 1}.webp`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      toast({
        title: "Download Failed",
        description: "Failed to download the image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const selectPresetPrompt = (presetPrompt: string) => {
    setPrompt(presetPrompt);
  };

  return (
    <div className="min-h-screen bg-[#111F54] text-white p-4 md:p-8">
      <header className="container mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="kWattz Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-bold" style={{ color: '#C3FF44' }}>
            kWattz Image Generator
          </h1>
        </div>
        <Link to="/" className="text-[#C3FF44] hover:text-[#C3FF44]/80">
          Back to Home
        </Link>
      </header>

      <div className="container mx-auto">
        {!runwareService ? (
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardHeader>
              <CardTitle style={{ color: '#C3FF44' }}>Connect to Runware</CardTitle>
              <CardDescription className="text-white/80">
                Enter your Runware API key to start generating images
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input 
                  type="password" 
                  placeholder="Enter your Runware API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="bg-white/5 border-white/20"
                />
                <Button 
                  onClick={handleConnect}
                  style={{ backgroundColor: '#C3FF44', color: '#111F54' }}
                >
                  Connect
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Don't have an API key? Visit <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-[#C3FF44] underline">Runware.ai</a> to create an account and get your API key.
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-8">
              <CardHeader>
                <CardTitle style={{ color: '#C3FF44' }}>Generate Images</CardTitle>
                <CardDescription className="text-white/80">
                  Create images for your kWattz landing page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-white">Image Prompt</label>
                    <Textarea 
                      placeholder="Enter a detailed description of the image you want to generate"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="h-32 bg-white/5 border-white/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-white">Preset Prompts</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {DEFAULT_PROMPTS.map((presetPrompt, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          className="text-left border-white/20 text-white bg-white/5 hover:bg-white/10 justify-start"
                          onClick={() => selectPresetPrompt(presetPrompt)}
                        >
                          Prompt {index + 1}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={generateImage} 
                  disabled={isGenerating}
                  style={{ backgroundColor: '#C3FF44', color: '#111F54' }}
                  className="w-full"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Image"
                  )}
                </Button>
              </CardFooter>
            </Card>

            {generatedImages.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold" style={{ color: '#C3FF44' }}>Generated Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {generatedImages.map((image, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
                      <div className="aspect-square relative">
                        <img 
                          src={image.imageURL} 
                          alt={`Generated image ${index}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardFooter className="flex justify-between mt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-white bg-white/5 border-white/20"
                          onClick={() => copyImageUrl(image.imageURL)}
                        >
                          <Copy className="h-4 w-4 mr-1" /> Copy URL
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-white bg-white/5 border-white/20"
                          onClick={() => downloadImage(image.imageURL, index)}
                        >
                          <Download className="h-4 w-4 mr-1" /> Download
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
