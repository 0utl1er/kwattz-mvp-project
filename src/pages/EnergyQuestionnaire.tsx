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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  ArrowRight, 
  Battery, 
  CalendarClock, 
  Home, 
  Zap, 
  MessageSquare, 
  User,
  Upload 
} from "lucide-react";

const formSchema = z.object({
  // Personal Info
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  
  // Energy Frustration
  frustration: z.enum(["HIGH_BILL", "RATES", "USAGE_TIMING"], {
    required_error: "Please select your biggest frustration.",
  }),
  
  // Monthly Spend
  monthlySpend: z.enum(["UNDER_50", "50_100", "100_200", "OVER_200"], {
    required_error: "Please select your monthly electricity spending.",
  }),
  
  // Features
  features: z.array(z.string()).min(1, {
    message: "Please select at least one feature.",
  }),
  
  // AI Advisor Opinion
  aiAdvisor: z.enum(["STRONGLY_DISAGREE", "DISAGREE", "NEUTRAL", "AGREE", "STRONGLY_AGREE"], {
    required_error: "Please provide your opinion on the AI advisor.",
  }),
  
  // Test Group
  testGroup: z.boolean().default(false),
  
  // Home Profile
  householdSize: z.enum(["ONE", "TWO", "THREE_FOUR", "FIVE_PLUS"], {
    required_error: "Please select the number of people in your household.",
  }),
  homeSize: z.enum(["UNDER_50", "50_100", "100_200", "OVER_200"], {
    required_error: "Please select the approximate size of your home.",
  }),
  homeType: z.enum(["HOUSE", "APARTMENT", "CONDO", "OTHER"], {
    required_error: "Please select your home type.",
  }),
  
  // Electrical Equipment
  appliances: z.array(z.string()).optional(),
  energyGeneration: z.enum(["NONE", "SOLAR", "GENERATOR", "OTHER"], {
    required_error: "Please select your energy generation system.",
  }),
  
  // Usage Habits
  usageTime: z.enum(["DAY", "NIGHT", "VARIED"], {
    required_error: "Please select when you typically use more energy.",
  }),
  tarifPlan: z.enum(["NO_IDEA", "FIXED", "TOU", "OTHER"], {
    required_error: "Please select your tariff plan.",
  }),
  
  // Interest Level
  smartMeterConnect: z.enum(["YES", "NO", "DEPENDS"], {
    required_error: "Please select your willingness to connect a smart meter.",
  }),
  techAttitude: z.enum(["CURIOUS", "SKEPTICAL", "SAVINGS_FOCUSED"], {
    required_error: "Please select your attitude toward technology.",
  }),
  
  // Feedback
  changeOne: z.string().optional(),
  comments: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const EnergyQuestionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const navigate = useNavigate();
  
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
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted with values:", values);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Questionnaire submitted",
        description: "Thanks for sharing your energy usage information!",
      });
      
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

  const nextTab = (tab: string) => {
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
                <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 mb-8">
                  <TabsTrigger value="personal" className="flex flex-col items-center">
                    <User className="h-5 w-5 mb-1" />
                    <span className="text-xs">Personal</span>
                  </TabsTrigger>
                  <TabsTrigger value="frustrations" className="flex flex-col items-center">
                    <Zap className="h-5 w-5 mb-1" />
                    <span className="text-xs">Bills</span>
                  </TabsTrigger>
                  <TabsTrigger value="home" className="flex flex-col items-center">
                    <Home className="h-5 w-5 mb-1" />
                    <span className="text-xs">Home</span>
                  </TabsTrigger>
                  <TabsTrigger value="appliances" className="flex flex-col items-center">
                    <Battery className="h-5 w-5 mb-1" />
                    <span className="text-xs">Appliances</span>
                  </TabsTrigger>
                  <TabsTrigger value="habits" className="flex flex-col items-center">
                    <CalendarClock className="h-5 w-5 mb-1" />
                    <span className="text-xs">Habits</span>
                  </TabsTrigger>
                  <TabsTrigger value="feedback" className="flex flex-col items-center">
                    <MessageSquare className="h-5 w-5 mb-1" />
                    <span className="text-xs">Feedback</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-6">
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
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      type="button" 
                      onClick={() => nextTab("frustrations")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="frustrations" className="space-y-6">
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
                                I don't understand my rates
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="USAGE_TIMING" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">
                                I don't know the best time to use energy
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
                                Under $50
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
                                Over $200
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
                          {[
                            { id: "real-time", label: "Real-time bill tracking" },
                            { id: "ai-tips", label: "AI-powered money-saving tips" },
                            { id: "device-insights", label: "Smart device energy insights" },
                            { id: "usage-reports", label: "Personalized usage reports" },
                            { id: "alerts", label: "Alerts for high energy consumption" }
                          ].map((feature) => (
                            <FormField
                              key={feature.id}
                              control={form.control}
                              name="features"
                              render={({ field }) => (
                                <FormItem
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(feature.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, feature.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== feature.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-white font-normal">
                                    {feature.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between mt-4">
                    <Button 
                      type="button" 
                      onClick={() => nextTab("personal")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => nextTab("home")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="home" className="space-y-6">
                  <FormField
                    control={form.control}
                    name="householdSize"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">How many people live in your home?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="ONE" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">1</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="TWO" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">2</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="THREE_FOUR" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">3-4</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="FIVE_PLUS" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">5 or more</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="homeSize"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">What's the approximate size of your home?</FormLabel>
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
                              <FormLabel className="font-normal text-white">Less than 50 m²</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="50_100" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">50-100 m²</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="100_200" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">100-200 m²</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="OVER_200" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">More than 200 m²</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="homeType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">You live in:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="HOUSE" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">House</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="APARTMENT" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Apartment</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="CONDO" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Condominium</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="OTHER" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Other</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between mt-4">
                    <Button 
                      type="button" 
                      onClick={() => nextTab("frustrations")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => nextTab("appliances")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="appliances" className="space-y-6">
                  <FormField
                    control={form.control}
                    name="appliances"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-white">Which of the following equipment do you frequently use?</FormLabel>
                          <FormDescription className="text-gray-300">
                            Select all that apply.
                          </FormDescription>
                        </div>
                        <div className="space-y-3">
                          {[
                            { id: "ac", label: "Air conditioning" },
                            { id: "heater", label: "Electric heater" },
                            { id: "washer", label: "Washing/drying machine" },
                            { id: "extra-fridge", label: "Extra refrigerator" },
                            { id: "ev", label: "Electric vehicle" },
                            { id: "solar", label: "Solar panels" },
                            { id: "gaming", label: "Computer / Gaming setup" },
                            { id: "industrial", label: "Industrial equipment or power tools" }
                          ].map((appliance) => (
                            <FormField
                              key={appliance.id}
                              control={form.control}
                              name="appliances"
                              render={({ field }) => (
                                <FormItem
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(appliance.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value || [], appliance.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== appliance.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-white font-normal">
                                    {appliance.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="energyGeneration"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">Do you have any energy generation system?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="NONE" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">No</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="SOLAR" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Yes, solar panels</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="GENERATOR" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Yes, electric generator</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="OTHER" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Yes, other</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between mt-4">
                    <Button 
                      type="button" 
                      onClick={() => nextTab("home")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous
                    </Button>
                    <Button 
                      type="button" 
                      onClick={() => nextTab("habits")}
                      className="bg-[#C3FF44] text-[#111F54] hover:bg-[#C3FF44]/90"
                    >
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="habits" className="space-y-6">
                  <FormField
                    control={form.control}
                    name="usageTime"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">You typically use more energy:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="DAY" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">During the day</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="NIGHT" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">During the night</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="VARIED" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">At various times</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tarifPlan"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">Do you know your tariff plan with your utility company?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="NO_IDEA" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">No idea</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="FIXED" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Fixed rate</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="TOU" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Time-of-Use (TOU)</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="OTHER" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Other / Don't know the name</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="smartMeterConnect"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">Would you be willing to connect your smart meter to Kwattz?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="YES" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="NO" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">No</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="DEPENDS" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Depends on privacy policies</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="techAttitude"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">You consider yourself:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="CURIOUS" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Curious about technology</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="SKEPTICAL" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Skeptical, but open to testing</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="SAVINGS_FOCUSED" />
                              </FormControl>
                              <FormLabel className="font-normal text-white">Just want to save money</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between mt-4">
                    <Button 
                      type="button" 
                      onClick={() => nextTab("appliances")}
                      className="bg-[#C3FF44] text-[#111F5
