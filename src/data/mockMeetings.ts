import { Meeting } from '@/types/meeting';

export const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Q2 Budget Planning',
    date: '2024-01-15',
    participants: ['Sarah Chen', 'Mike Rodriguez', 'Emma Thompson', 'You'],
    duration: '45 min',
    transcript: `Sarah Chen: Let's review the Q2 budget proposals. We have three main areas to discuss.

Mike Rodriguez: The marketing budget request is $120K, up from $95K last quarter. This increase is primarily for the new product launch campaign.

Emma Thompson: I think that's justified. The market research shows strong potential for the new product line. We should also consider the competitive landscape - our main competitors are spending heavily in this space.

You: What about the engineering budget? Are we still on track with the $200K allocation?

Sarah Chen: Yes, engineering is locked at $200K. That covers the new hires we discussed last month and the infrastructure upgrades.

Mike Rodriguez: One concern - the customer success team is requesting additional headcount. That wasn't in the original budget.

Emma Thompson: That's a valid point. With the product launch, we'll need more support capacity. I suggest we allocate an additional $50K for CS hiring.

Sarah Chen: Agreed. Let's finalize these numbers: Marketing $120K, Engineering $200K, Customer Success additional $50K. Total Q2 budget of $370K plus existing operational costs.

DECISION: Q2 budget approved at $370K for strategic initiatives. Marketing gets $120K for product launch, Engineering maintains $200K, Customer Success receives additional $50K for hiring.`,
    decisions: [
      'Q2 budget approved at $370K for strategic initiatives',
      'Marketing allocated $120K for product launch campaign',
      'Engineering maintains $200K budget',
      'Customer Success receives additional $50K for new hires'
    ],
    actionItems: [
      'Sarah to finalize budget documentation by end of week',
      'Mike to prepare detailed marketing campaign plan',
      'Emma to draft job descriptions for CS positions'
    ],
    topics: ['Budget Planning', 'Marketing', 'Engineering', 'Customer Success', 'Product Launch']
  },
  {
    id: '2',
    title: 'New Product Launch Strategy',
    date: '2024-01-22',
    participants: ['Mike Rodriguez', 'Lisa Park', 'James Wilson', 'You'],
    duration: '60 min',
    transcript: `Mike Rodriguez: Thanks everyone for joining. Today we're finalizing our go-to-market strategy for the new product launch scheduled for March 15th.

Lisa Park: I've completed the competitive analysis. Our main differentiator is the AI-powered recommendation engine. None of our competitors have this capability yet.

James Wilson: From a product perspective, we're on track for the March 15th launch date. All core features are complete, and we're in final QA testing.

You: What's our pricing strategy looking like?

Mike Rodriguez: We're going with a freemium model. Free tier for basic features, $29/month for pro, and $99/month for enterprise. This positions us competitively while capturing different market segments.

Lisa Park: The marketing timeline: soft launch with beta users on March 1st, followed by public launch on March 15th. We'll do a coordinated PR push, social media campaign, and email outreach to our existing customer base.

James Wilson: One thing to note - we'll need to monitor server capacity closely during launch. I've coordinated with ops to have scaling capabilities ready.

Mike Rodriguez: Perfect. Let's also discuss the launch metrics we'll track: user signups, activation rate, retention at 7 days, and conversion to paid tiers.

DECISION: Product launches March 15th with freemium pricing model ($29 pro, $99 enterprise). Marketing begins beta program March 1st.`,
    decisions: [
      'Product launch date confirmed for March 15th, 2024',
      'Freemium pricing model: Free tier, $29/month Pro, $99/month Enterprise',
      'Beta program starts March 1st with selected users',
      'Key metrics: user signups, activation rate, 7-day retention, conversion rates'
    ],
    actionItems: [
      'Lisa to coordinate with PR team for launch announcement',
      'James to finalize server scaling plan with ops team',
      'Mike to create launch day communication plan',
      'Team to prepare beta user onboarding materials by Feb 25th'
    ],
    topics: ['Product Launch', 'Marketing Strategy', 'Pricing', 'Competitive Analysis', 'Beta Testing']
  },
  {
    id: '3',
    title: 'Engineering Roadmap Review',
    date: '2024-01-29',
    participants: ['James Wilson', 'Priya Sharma', 'Alex Chen', 'You'],
    duration: '50 min',
    transcript: `James Wilson: Let's review our technical priorities for the next quarter. We have three major initiatives on the table.

Priya Sharma: First priority is the mobile app development. We've had strong customer demand for iOS and Android apps. I estimate 3 months for MVP with core features.

Alex Chen: Second is the API v2 migration. The current API is reaching its limits, and we're seeing performance issues with larger clients. This is critical for scalability.

You: What about the AI recommendation engine improvements? That's our key differentiator.

James Wilson: Good point. The AI engine should be priority three. Priya, what do you think about the machine learning model updates?

Priya Sharma: We can improve accuracy by 15-20% with the new training dataset we've collected. But this requires significant compute resources. We'll need cloud infrastructure budget.

Alex Chen: For the API migration, I propose we run both v1 and v2 in parallel for 6 months to ensure smooth transition for existing clients.

James Wilson: Agreed on the parallel approach. Let's set these priorities: 1) Mobile app MVP in 3 months, 2) API v2 with parallel v1 support, 3) AI model improvements with necessary infrastructure.

Priya Sharma: We'll also need to hire 2 additional engineers to handle this workload effectively.

DECISION: Engineering roadmap prioritizes mobile app (3 months), API v2 migration (6-month parallel support), and AI model improvements. Approved to hire 2 additional engineers.`,
    decisions: [
      'Q2 Engineering roadmap: Mobile app MVP (3 months), API v2 migration (6 months), AI improvements',
      'API v1 and v2 will run in parallel for 6 months during migration',
      'Approved to hire 2 additional engineers for increased workload',
      'Budget allocation for cloud infrastructure for AI model training'
    ],
    actionItems: [
      'Priya to draft mobile app technical specifications',
      'Alex to create API v2 migration plan with timeline',
      'James to post job descriptions for 2 engineering positions',
      'Team to prepare infrastructure cost estimates for AI training'
    ],
    topics: ['Engineering Roadmap', 'Mobile Development', 'API Migration', 'AI/ML', 'Hiring']
  },
  {
    id: '4',
    title: 'Customer Feedback Analysis',
    date: '2024-02-05',
    participants: ['Emma Thompson', 'David Lee', 'You'],
    duration: '40 min',
    transcript: `Emma Thompson: I've compiled customer feedback from the past quarter. Some interesting patterns have emerged.

David Lee: The most requested feature by far is mobile access. We're seeing this from 67% of our enterprise customers and 48% of pro users.

You: That aligns perfectly with our engineering roadmap discussion last week. What else are customers saying?

Emma Thompson: Integration requests are second highest - particularly Slack, Microsoft Teams, and Salesforce. Customers want our platform to fit into their existing workflows.

David Lee: We're also getting positive feedback on the AI recommendations, but some users find the interface confusing. They want more transparency in how recommendations are generated.

Emma Thompson: Customer support metrics are strong overall - 94% satisfaction rate, average response time of 4 hours. However, we're seeing increased volume that's straining the team.

You: That's why we allocated additional budget for CS hiring in the Q2 budget meeting. Are there any concerning trends?

David Lee: One area of concern - we've had 3 enterprise customers ask about data security and compliance certifications. We might need to accelerate our SOC 2 compliance timeline.

Emma Thompson: Agreed. Let's prioritize that. Overall customer retention is at 92%, which is excellent, but we can't afford to lose enterprise customers over compliance issues.

DECISION: Prioritize mobile development (validated by customer demand), plan integration roadmap for top-requested platforms, accelerate SOC 2 compliance timeline, proceed with CS team expansion.`,
    decisions: [
      'Mobile development validated as top priority by customer demand (67% enterprise, 48% pro)',
      'Plan integration roadmap for Slack, Microsoft Teams, and Salesforce',
      'Accelerate SOC 2 compliance timeline due to enterprise customer requests',
      'Proceed with Customer Success team expansion as planned',
      'Improve AI recommendation interface transparency'
    ],
    actionItems: [
      'Emma to create detailed integration requirements document',
      'David to research SOC 2 compliance consultants and timeline',
      'Emma to draft UI improvements for AI recommendation explanations',
      'Team to schedule follow-up with enterprise customers regarding compliance'
    ],
    topics: ['Customer Feedback', 'Feature Requests', 'Integrations', 'Compliance', 'Customer Success']
  },
  {
    id: '5',
    title: 'Weekly Standup - Engineering',
    date: '2024-02-12',
    participants: ['James Wilson', 'Priya Sharma', 'Alex Chen', 'Maya Johnson', 'You'],
    duration: '30 min',
    transcript: `James Wilson: Quick standup to sync on weekly progress. Priya, let's start with you.

Priya Sharma: I've completed the mobile app architecture design. React Native for cross-platform development. We can share about 80% of the codebase between iOS and Android. Starting implementation this week.

Alex Chen: API v2 design is finalized. I'm beginning the migration plan documentation. The authentication system will be the first component to migrate. Target next week for initial testing.

Maya Johnson: Working on the AI model retraining pipeline. Initial tests show 12% improvement in recommendation accuracy. Need another week to reach the 15-20% target Priya mentioned in the roadmap meeting.

You: Great progress everyone. Any blockers?

Priya Sharma: Need design assets for the mobile app. I've requested from the design team but haven't received them yet.

James Wilson: I'll follow up with the design team today. Alex, any concerns with the API migration?

Alex Chen: Just one - we need to decide on versioning strategy for the API endpoints. Two options: path-based (/v2/) or header-based versioning. I lean toward path-based for clarity.

James Wilson: Path-based makes sense. Let's go with that. Maya, what do you need for the AI work?

Maya Johnson: More GPU hours in the cloud. Current allocation is limiting training iterations. Can we increase the compute budget?

James Wilson: Yes, that was approved in the Q2 budget. I'll get you the updated credentials today.

DECISION: React Native for mobile app development, path-based API versioning (/v2/), increased GPU allocation for AI training.`,
    decisions: [
      'React Native chosen for mobile app (80% code sharing between platforms)',
      'API versioning will use path-based approach (/v2/)',
      'Increased GPU compute allocation approved for AI model training',
      'Authentication system will be first component migrated to API v2'
    ],
    actionItems: [
      'James to follow up with design team for mobile app assets',
      'Alex to document API v2 migration plan with path-based versioning',
      'James to provide updated cloud GPU credentials to Maya',
      'Priya to begin mobile app implementation this week'
    ],
    topics: ['Engineering Standup', 'Mobile Development', 'API Development', 'AI/ML', 'Team Coordination']
  }
];
