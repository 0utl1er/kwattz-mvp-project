
export type FormValues = {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  
  // Energy Frustration
  frustration: "HIGH_BILL" | "RATES" | "USAGE_TIMING";
  
  // Monthly Spend
  monthlySpend: "UNDER_50" | "50_100" | "100_200" | "OVER_200";
  
  // Features
  features: string[];
  
  // AI Advisor Opinion
  aiAdvisor: "STRONGLY_DISAGREE" | "DISAGREE" | "NEUTRAL" | "AGREE" | "STRONGLY_AGREE";
  
  // Test Group
  testGroup: boolean;
  
  // Home Profile
  householdSize: "ONE" | "TWO" | "THREE_FOUR" | "FIVE_PLUS";
  homeSize: "UNDER_50" | "50_100" | "100_200" | "OVER_200";
  homeType: "HOUSE" | "APARTMENT" | "CONDO" | "OTHER";
  
  // Electrical Equipment
  appliances?: string[];
  energyGeneration: "NONE" | "SOLAR" | "GENERATOR" | "OTHER";
  
  // Usage Habits
  usageTime: "DAY" | "NIGHT" | "VARIED";
  tarifPlan: "NO_IDEA" | "FIXED" | "TOU" | "OTHER";
  
  // Interest Level
  smartMeterConnect: "YES" | "NO" | "DEPENDS";
  techAttitude: "CURIOUS" | "SKEPTICAL" | "SAVINGS_FOCUSED";
  
  // Feedback
  changeOne?: string;
  comments?: string;
};
