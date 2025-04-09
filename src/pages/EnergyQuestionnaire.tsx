
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  frustration: z.enum(["HIGH_BILL", "RATES", "USAGE_TIMING"], {
    required_error: "Please select your biggest frustration.",
  }),
  monthlySpend: z.enum(["UNDER_50", "50_100", "100_200", "OVER_200"], {
    required_error: "Please select your monthly electricity spending.",
  }),
  features: z.array(z.string()).min(1, {
    message: "Please select at least one feature.",
  }),
  aiAdvisor: z.enum(["STRONGLY_DISAGREE", "DISAGREE", "NEUTRAL", "AGREE", "STRONGLY_AGREE"], {
    required_error: "Please provide your opinion on the AI advisor.",
  }),
  testGroup: z.boolean().default(false),
  comments: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const EnergyQuestionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      features: [],
      testGroup: false,
      comments: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // This is where you would send the data to your backend
      console.log("Form submitted with values:", values);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Questionnaire submitted",
        description: "Thanks for sharing your energy usage information!",
      });
      
      // Navigate to dashboard or another page after submission
      navigate("/dashboard");
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

  return (
    <div className="min-h-screen bg-[#111F54] flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#C3FF44]">Energy Usage Questionnaire</h1>
            <p className="text-white mt-2">Help us understand your energy needs</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="frustration"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-white">What's your biggest frustration with your electricity bill?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="HIGH_BILL" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            I have no idea why is so high
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="RATES" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            I DON'T UNDERSTAND MY RATES
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="USAGE_TIMING" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            I DON'T KNOW THE BEST TIME TO USE ENERGY
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="monthlySpend"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-white">How much do you typically spend on electricity per month?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="UNDER_50" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            UNDER $50
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="50_100" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            $50-$100
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="100_200" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            $100-$200
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="OVER_200" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            OVER $200
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="features"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-white">What features would be most useful to you?</FormLabel>
                      <FormDescription className="text-gray-300">
                        Select all that apply.
                      </FormDescription>
                    </div>
                    <div className="space-y-3">
                      <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key="real-time"
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("real-time")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "real-time"])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== "real-time"
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal">
                                Real-time bill tracking
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key="ai-tips"
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("ai-tips")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "ai-tips"])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== "ai-tips"
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal">
                                AI-powered money-saving tips
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key="device-insights"
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("device-insights")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "device-insights"])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== "device-insights"
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal">
                                Smart device energy insights
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key="usage-reports"
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("usage-reports")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "usage-reports"])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== "usage-reports"
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal">
                                Personalized usage reports
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key="alerts"
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes("alerts")}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, "alerts"])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== "alerts"
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white font-normal">
                                Alerts for high energy consumption
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="aiAdvisor"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-white">Would you use an AI-powered energy advisor that helps you track and optimize your electricity usage?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="STRONGLY_DISAGREE" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            Strongly Disagree
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="DISAGREE" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            Disagree
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="NEUTRAL" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            Neutral
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="AGREE" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            Agree
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="STRONGLY_AGREE" />
                          </FormControl>
                          <FormLabel className="font-normal text-white">
                            Strongly Agree
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="testGroup"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        Would you like to be part of our test group?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Comments</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share any additional thoughts or questions..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormDescription className="text-gray-300">
                      Required for your personalized energy plan
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full text-[#111F54] hover:bg-[#C3FF44]/90" 
                style={{ backgroundColor: '#C3FF44' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Questionnaire"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EnergyQuestionnaire;
