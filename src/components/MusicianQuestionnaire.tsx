"use client";

import { useState, FormEvent } from "react";

interface FormData {
  // Project Overview
  primaryGoals: string[];
  primaryGoalsOther: string;
  targetAudience: string;
  biggestPriority: string;

  // Content & Branding
  existingBranding: string;
  contentReady: string[];
  websiteInspiration: string;

  // Features & Functionality
  mustHaveFeatures: string[];
  mustHaveFeaturesOther: string;
  needsEcommerce: string;
  directBooking: string;

  // Management & Updates
  siteManager: string;
  updateFrequency: string;
  otherDetails: string;

  // Contact
  phone: string;
  email: string;
  preferredTime: string;
}

const initialFormData: FormData = {
  primaryGoals: [],
  primaryGoalsOther: "",
  targetAudience: "",
  biggestPriority: "",
  existingBranding: "",
  contentReady: [],
  websiteInspiration: "",
  mustHaveFeatures: [],
  mustHaveFeaturesOther: "",
  needsEcommerce: "",
  directBooking: "",
  siteManager: "",
  updateFrequency: "",
  otherDetails: "",
  phone: "",
  email: "",
  preferredTime: "",
};

export default function MusicianQuestionnaire() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxChange = (
    field: "primaryGoals" | "contentReady" | "mustHaveFeatures",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleRadioChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the form data for email
    const formattedData = `
MUSICIAN WEBSITE QUESTIONNAIRE

PROJECT OVERVIEW
================
Primary Goals: ${formData.primaryGoals.join(", ")}${formData.primaryGoalsOther ? ` - Other: ${formData.primaryGoalsOther}` : ""}
Target Audience: ${formData.targetAudience}
Biggest Priority: ${formData.biggestPriority}

CONTENT & BRANDING
==================
Existing Branding: ${formData.existingBranding}
Content Ready: ${formData.contentReady.join(", ")}
Website Inspiration: ${formData.websiteInspiration}

FEATURES & FUNCTIONALITY
========================
Must-Have Features: ${formData.mustHaveFeatures.join(", ")}${formData.mustHaveFeaturesOther ? ` - Other: ${formData.mustHaveFeaturesOther}` : ""}
Needs E-commerce: ${formData.needsEcommerce}
Direct Booking: ${formData.directBooking}

MANAGEMENT & UPDATES
====================
Site Manager: ${formData.siteManager}
Update Frequency: ${formData.updateFrequency}
Other Details: ${formData.otherDetails}

CONTACT INFO
============
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Day/Time: ${formData.preferredTime}
    `.trim();

    // Create mailto link with form data
    const mailtoLink = `mailto:hello@brianoliver.dev?subject=${encodeURIComponent("Musician Website Questionnaire Submission")}&body=${encodeURIComponent(formattedData)}`;

    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Thank You!
          </h2>
          <p className="text-muted text-lg mb-8">
            Your email client should have opened with your questionnaire responses.
            Please send the email to complete your submission.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 border border-border rounded-full font-medium hover:border-foreground transition-colors"
          >
            Fill Out Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Musician Website Questionnaire
          </h1>
          <p className="text-muted text-lg">
            Help me understand your vision so I can create the perfect website for your music career.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Project Overview */}
          <div className="space-y-8">
            <h2 className="text-sm text-muted uppercase tracking-wide pb-2 border-b border-border">
              Project Overview
            </h2>

            {/* Primary Goal */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                What is the primary goal of your website?
              </label>
              <div className="space-y-3">
                {[
                  "Sell music/merchandise",
                  "Book shows and events",
                  "Build email list",
                  "Showcase portfolio/discography",
                  "Promote social media",
                  "Multiple goals",
                ].map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.primaryGoals.includes(goal)}
                      onChange={() => handleCheckboxChange("primaryGoals", goal)}
                      className="w-5 h-5 rounded border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {goal}
                    </span>
                  </label>
                ))}
              </div>
              {formData.primaryGoals.includes("Multiple goals") && (
                <textarea
                  value={formData.primaryGoalsOther}
                  onChange={(e) =>
                    handleInputChange("primaryGoalsOther", e.target.value)
                  }
                  placeholder="Please describe your goals..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  rows={3}
                />
              )}
            </div>

            {/* Target Audience */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Who is your target audience?
              </label>
              <textarea
                value={formData.targetAudience}
                onChange={(e) =>
                  handleInputChange("targetAudience", e.target.value)
                }
                placeholder="Describe your ideal fans and listeners..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                rows={3}
              />
            </div>

            {/* Biggest Priority */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                What&apos;s your biggest priority for this site?
              </label>
              <textarea
                value={formData.biggestPriority}
                onChange={(e) =>
                  handleInputChange("biggestPriority", e.target.value)
                }
                placeholder="What's the most important thing you want this website to accomplish?"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Content & Branding */}
          <div className="space-y-8">
            <h2 className="text-sm text-muted uppercase tracking-wide pb-2 border-b border-border">
              Content & Branding
            </h2>

            {/* Existing Branding */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Do you have existing branding (logo, color scheme, fonts)?
              </label>
              <div className="space-y-3">
                {[
                  { value: "yes", label: "Yes, I'll provide files" },
                  { value: "ideas", label: "I have ideas but no formal branding" },
                  { value: "no", label: "No branding yet - let's figure it out together" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="existingBranding"
                      value={option.value}
                      checked={formData.existingBranding === option.value}
                      onChange={() =>
                        handleRadioChange("existingBranding", option.value)
                      }
                      className="w-5 h-5 border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Content Ready */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                What content do you already have ready?
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Professional photos",
                  "Music files/streaming links",
                  "Bio/about section written",
                  "Videos",
                  "Press kit",
                  "Tour dates/events calendar",
                  "Need help gathering content",
                ].map((content) => (
                  <label
                    key={content}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.contentReady.includes(content)}
                      onChange={() =>
                        handleCheckboxChange("contentReady", content)
                      }
                      className="w-5 h-5 rounded border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {content}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Website Inspiration */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Share any websites you like the design or feel of
              </label>
              <textarea
                value={formData.websiteInspiration}
                onChange={(e) =>
                  handleInputChange("websiteInspiration", e.target.value)
                }
                placeholder="Include URLs and what you like about each..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Features & Functionality */}
          <div className="space-y-8">
            <h2 className="text-sm text-muted uppercase tracking-wide pb-2 border-b border-border">
              Features & Functionality
            </h2>

            {/* Must-Have Features */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Which features are must-haves for your site?
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Music player/streaming",
                  "Tour dates/events calendar",
                  "Merchandise store",
                  "Email signup",
                  "Social media integration",
                  "Press kit download",
                  "Contact/booking form",
                  "Blog",
                  "Photo gallery",
                  "Video gallery",
                ].map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.mustHaveFeatures.includes(feature)}
                      onChange={() =>
                        handleCheckboxChange("mustHaveFeatures", feature)
                      }
                      className="w-5 h-5 rounded border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                value={formData.mustHaveFeaturesOther}
                onChange={(e) =>
                  handleInputChange("mustHaveFeaturesOther", e.target.value)
                }
                placeholder="Other features..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* E-commerce */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Do you need e-commerce (to sell music/merch)?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "maybe", label: "Maybe later" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="needsEcommerce"
                      value={option.value}
                      checked={formData.needsEcommerce === option.value}
                      onChange={() =>
                        handleRadioChange("needsEcommerce", option.value)
                      }
                      className="w-5 h-5 border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Direct Booking */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Should fans be able to book you directly through the site?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "contact-form", label: "Through a contact form only" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="directBooking"
                      value={option.value}
                      checked={formData.directBooking === option.value}
                      onChange={() =>
                        handleRadioChange("directBooking", option.value)
                      }
                      className="w-5 h-5 border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Management & Updates */}
          <div className="space-y-8">
            <h2 className="text-sm text-muted uppercase tracking-wide pb-2 border-b border-border">
              Management & Updates
            </h2>

            {/* Site Manager */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Who will manage updates to the site?
              </label>
              <div className="space-y-3">
                {[
                  { value: "you", label: "You (I'll handle it)" },
                  { value: "me", label: "Me (I'd prefer you update it)" },
                  { value: "both", label: "Both of us" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="siteManager"
                      value={option.value}
                      checked={formData.siteManager === option.value}
                      onChange={() =>
                        handleRadioChange("siteManager", option.value)
                      }
                      className="w-5 h-5 border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Update Frequency */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                How often do you anticipate making changes?
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: "weekly", label: "Weekly" },
                  { value: "monthly", label: "Monthly" },
                  { value: "occasionally", label: "As needed/occasionally" },
                  { value: "rarely", label: "Rarely" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="updateFrequency"
                      value={option.value}
                      checked={formData.updateFrequency === option.value}
                      onChange={() =>
                        handleRadioChange("updateFrequency", option.value)
                      }
                      className="w-5 h-5 border-border accent-accent"
                    />
                    <span className="group-hover:text-accent transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Other Details */}
            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Any other details or special requests?
              </label>
              <textarea
                value={formData.otherDetails}
                onChange={(e) =>
                  handleInputChange("otherDetails", e.target.value)
                }
                placeholder="Share anything else you'd like me to know..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Contact & Next Steps */}
          <div className="space-y-8">
            <h2 className="text-sm text-muted uppercase tracking-wide pb-2 border-b border-border">
              Contact & Next Steps
            </h2>

            <div className="space-y-4">
              <label className="block text-lg font-medium">
                Best way to reach you for a call?
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted mb-2">
                  Preferred day/time for a call
                </label>
                <input
                  type="text"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    handleInputChange("preferredTime", e.target.value)
                  }
                  placeholder="e.g., Weekday afternoons, Saturday mornings..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8 border-t border-border">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-12 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Questionnaire"}
            </button>
            <p className="mt-4 text-sm text-muted">
              This will open your email client with your responses. Just hit send!
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
