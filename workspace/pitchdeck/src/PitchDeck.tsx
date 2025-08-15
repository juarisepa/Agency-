import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PhoneCall, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function PitchDeck() {
	return (
		<div className="p-10 grid gap-6 max-w-5xl mx-auto">
			{/* Header */}
			<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
				<h1 className="text-4xl font-bold text-center">AI Automation & Consultancy Agency</h1>
				<p className="text-center text-lg text-gray-600 mt-2">
					Helping Businesses Save Time, Reduce Costs & Grow with AI Workflows
				</p>
			</motion.div>

			{/* Problem */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
				<Card className="rounded-2xl shadow-md">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">1. The Problem</h2>
						<ul className="list-disc ml-6 space-y-2">
							<li>Dentists & Therapists: Missed calls, no-shows, and lost revenue.</li>
							<li>Agencies & Freelancers: Chasing late payments wastes time and hurts cash flow.</li>
							<li>SMEs: Repetitive tasks drain productivity and distract from growth.</li>
						</ul>
					</CardContent>
				</Card>
			</motion.div>

			{/* Solution */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
				<Card className="rounded-2xl shadow-md">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">2. Our Solution</h2>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<li className="flex items-start space-x-3"><PhoneCall className="text-blue-500" /> <span><strong>AI Receptionist:</strong> Answers calls, books appointments, reduces no-shows.</span></li>
							<li className="flex items-start space-x-3"><DollarSign className="text-green-500" /> <span><strong>Automated Invoice Chaser:</strong> Sends reminders, tracks payments, improves cash flow.</span></li>
							<li className="flex items-start space-x-3"><Users className="text-purple-500" /> <span><strong>Lead Follow-up Bot:</strong> Engages leads instantly and books sales calls.</span></li>
							<li className="flex items-start space-x-3"><CheckCircle className="text-orange-500" /> <span><strong>AI Recruiting Assistant:</strong> Automates CV screening & interview scheduling.</span></li>
						</ul>
					</CardContent>
				</Card>
			</motion.div>

			{/* Market Opportunity */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
				<Card className="rounded-2xl shadow-md">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">3. Market Opportunity</h2>
						<p>
							SMEs, clinics, and agencies worldwide spend billions yearly on admin and repetitive tasks.
							AI automation can cut these costs by 20–40% while unlocking new growth opportunities.
							We focus first on high-pain industries (healthcare, agencies, professional services).
						</p>
					</CardContent>
				</Card>
			</motion.div>

			{/* Business Model */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
				<Card className="rounded-2xl shadow-md">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">4. Business Model</h2>
						<ul className="list-disc ml-6 space-y-2">
							<li>Setup Fee: $3K–$5K per workflow.</li>
							<li>Monthly Retainer: $500–$1,000 for support & optimization.</li>
							<li>Enterprise Customization: $20K+.</li>
						</ul>
						<p className="mt-2 font-semibold">100 clients at $10K/year = $1M annual revenue.</p>
					</CardContent>
				</Card>
			</motion.div>

			{/* Why Us */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
				<Card className="rounded-2xl shadow-md">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">5. Why Us?</h2>
						<ul className="list-disc ml-6 space-y-2">
							<li>Expertise with top AI automation tools (n8n, Replit, Cursor, Lovable).</li>
							<li>Ready-to-deploy workflows that bring results in days, not months.</li>
							<li>Focused on ROI: saving hours and boosting revenue for clients.</li>
							<li>Flexible pricing to serve SMEs and enterprises alike.</li>
						</ul>
					</CardContent>
				</Card>
			</motion.div>

			{/* Call to Action */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-center">
				<Card className="rounded-2xl shadow-md bg-blue-50">
					<CardContent className="p-6">
						<h2 className="text-2xl font-semibold mb-3">6. Call to Action</h2>
						<p className="mb-4">Let’s automate your business and unlock growth. Book a free 15-min AI Workflow Audit today.</p>
						<Button className="bg-blue-600 text-white hover:bg-blue-700">Book a Free Call</Button>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}