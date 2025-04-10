import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import DOMPurify from 'dompurify';
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useAnalyzeBill } from "@/hooks/use-analyze-bill";
import { FormValues } from "@/types/questionnaire";

import QuestionnaireNavigation from "@/components/questionnaire/QuestionnaireNavigation";
import PersonalInfoTab from "@/components/questionnaire/PersonalInfoTab";
import FrustrationsTab from "@/components/questionnaire/FrustrationsTab";
import HomeTab from "@/components/questionnaire/HomeTab";
import AppliancesTab from "@/components/questionnaire/AppliancesTab";
import HabitsTab from "@/components/questionnaire/HabitsTab";
import FeedbackTab from "@/components/questionnaire/FeedbackTab";

const formSchema = z.object({
  // Personal Info
  firstName: z.string()
    .min(2, { message: "First name must be at least 2 characters." })
    .max(50, { message: "First name cannot exceed 50 characters." })
    .refine(val => /^[a-zA-Z\s\-']+$/.test(val), { 
      message: "First name can only contain letters, spaces, hyphens, and apostrophes." 
    }),
  lastName: z.string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .max(50, { message: "Last name cannot exceed 50 characters." })
    .refine(val => /^[a-zA-Z\s\-']+$/.test(val), { 
      message: "Last name can only contain letters, spaces, hyphens, and apostrophes." 
    }),
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email cannot exceed 100 characters." }),
  
  // Energy Frustration
  frustration: z.enum(["HIGH_BILL", "RATES", "USAGE_TIMING"], {
    required_error: "Please select your biggest frustration.",
  }),
  
  // Monthly Spend - keep enum validation
  monthlySpend: z.enum(["UNDER_50", "50_100", "100_200", "OVER_200"], {
    required_error: "Please select your monthly electricity spending.",
  }),
  
  // Features - validate array contents
  features: z.array(
    z.string().refine(val => ["real-time", "ai-tips", "device-insights", "usage-reports", "alerts"].includes(val), {
      message: "Invalid feature selection."
    })
  ).min(1, {
    message: "Please select at least one feature.",
  }),
  
  // AI Advisor Opinion - keep enum validation
  aiAdvisor: z.enum(["STRONGLY_DISAGREE", "DISAGREE", "NEUTRAL", "AGREE", "STRONGLY_AGREE"], {
    required_error: "Please provide your opinion on the AI advisor.",
  }),
  
  // Test Group
  testGroup: z.boolean().default(false),
  
  // Home Profile - keep enum validations
  householdSize: z.enum(["ONE", "TWO", "THREE_FOUR", "FIVE_PLUS"], {
    required_error: "Please select the number of people in your household.",
  }),
  homeSize: z.enum(["UNDER_50", "50_100", "100_200", "OVER_200"], {
    required_error: "Please select the approximate size of your home.",
  }),
  homeType: z.enum(["HOUSE", "APARTMENT", "CONDO", "OTHER"], {
    required_error: "Please select your home type.",
  }),
  
  // Electrical Equipment - validate appliances array
  appliances: z.array(
    z.string().refine(val => ["ac", "heater", "washer", "extra-fridge", "ev", "solar", "gaming", "industrial"].includes(val), {
      message: "Invalid appliance selection."
    })
  ).optional(),
  energyGeneration: z.enum(["NONE", "SOLAR", "GENERATOR", "OTHER"], {
    required_error: "Please select your energy generation system.",
  }),
  
  // Usage Habits - keep enum validations
  usageTime: z.enum(["DAY", "NIGHT", "VARIED"], {
    required_error: "Please select when you typically use more energy.",
  }),
  tarifPlan: z.enum(["NO_IDEA", "FIXED", "TOU", "OTHER"], {
    required_error: "Please select your tariff plan.",
  }),
  
  // Interest Level - keep enum validations
  smartMeterConnect: z.enum(["YES", "NO", "DEPENDS"], {
    required_error: "Please select your willingness to connect a smart meter.",
  }),
  techAttitude: z.enum(["CURIOUS", "SKEPTICAL", "SAVINGS_FOCUSED"], {
    required_error: "Please select your attitude toward technology.",
  }),
  
  // Feedback - with content validation and sanitization
  changeOne: z.string()
    .max(500, { message: "Response cannot exceed 500 characters." })
    .optional()
    .transform(val => val ? DOMPurify.sanitize(val.trim()) : val),
  comments: z.string()
    .max(1000, { message: "Comments cannot exceed 1000 characters." })
    .optional()
    .transform(val => val ? DOMPurify.sanitize(val.trim()) : val),
});

const EnergyQuestionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { analyzeBill, isAnalyzing, analysisResult, error, progress } = useAnalyzeBill();
  const navigate = useNavigate();
  
  useEffect(() => {
    return () => {
      if (formSubmitted) {
        form.reset();
        setFormSubmitted(false);
      }
    };
  }, [formSubmitted]);

  useEffect(() => {
    if (analysisResult) {
      toast({
        title: "Bill analysis complete",
        description: "We've successfully analyzed your bill and saved the information.",
      });
      
      navigate("/dashboard", { replace: true });
    }
    
    if (error) {
      toast({
        title: "Bill analysis failed",
        description: error,
        variant: "destructive",
      });
    }
  }, [analysisResult, error, navigate]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      features: [],
      appliances: [],
      testGroup: false,
      comments: "",
      changeOne: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (isSubmitting) return; // Prevent double submission
    
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted with values:", values);
      
      if (uploadedFile) {
        await analyzeBill(uploadedFile, values);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormSubmitted(true);
        
        toast({
          title: "Questionnaire submitted",
          description: "Thanks for sharing your energy usage information!",
        });
        
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error("Error submitting questionnaire:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    toast({
      title: "File uploaded",
      description: `${file.name} is ready for submission.`,
    });
  };

  const nextTab = (tab: string) => {
    switch (activeTab) {
      case "personal":
        form.trigger(["firstName", "lastName", "email"]);
        break;
      case "frustrations":
        form.trigger(["frustration", "monthlySpend", "features"]);
        break;
      // Add validation for other tabs as needed
    }
    
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/20 mt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#C3FF44]">Energy Usage Questionnaire</h1>
            <p className="text-white mt-2">Help us understand your energy needs and habits</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <QuestionnaireNavigation activeTab={activeTab} />

                <TabsContent value="personal">
                  <PersonalInfoTab form={form} onNext={nextTab} />
                </TabsContent>

                <TabsContent value="frustrations">
                  <FrustrationsTab form={form} onNext={nextTab} onPrevious={nextTab} />
                </TabsContent>

                <TabsContent value="home">
                  <HomeTab form={form} onNext={nextTab} onPrevious={nextTab} />
                </TabsContent>

                <TabsContent value="appliances">
                  <AppliancesTab form={form} onNext={nextTab} onPrevious={nextTab} />
                </TabsContent>

                <TabsContent value="habits">
                  <HabitsTab form={form} onNext={nextTab} onPrevious={nextTab} />
                </TabsContent>

                <TabsContent value="feedback">
                  <FeedbackTab 
                    form={form}
                    onPrevious={nextTab}
                    uploadedFile={uploadedFile}
                    handleFileUpload={handleFileUpload}
                    isSubmitting={isSubmitting}
                    isAnalyzing={isAnalyzing}
                    analysisProgress={progress}
                  />
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EnergyQuestionnaire;
