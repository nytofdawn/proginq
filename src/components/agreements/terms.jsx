import React from 'react';
import { FaFileContract, FaCode, FaUsers, FaDollarSign, FaShieldAlt, FaGavel, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const TermsofService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaFileContract className="text-5xl text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These terms govern your use of DNL G Experts services. Please read them carefully 
            before engaging our development services.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>Effective Date: July 6, 2025</p>
            <p>Last Updated: July 6, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FaUsers className="text-green-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing our website, engaging our services, or communicating with DNL G Experts, 
                you agree to be bound by these Terms of Service and our Privacy Policy. If you do not 
                agree to these terms, please do not use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                DNL G Experts is a freelance web development team providing fast, flexible, and 
                future-ready digital solutions including website development, web applications, 
                and related technical services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FaCode className="text-green-600" />
                2. Services Offered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-medium mb-3 text-blue-900">Development Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Custom website development</li>
                    <li>Web application development</li>
                    <li>E-commerce solutions</li>
                    <li>Database design and integration</li>
                    <li>API development and integration</li>
                    <li>Mobile-responsive design</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-medium mb-3 text-green-900">Support Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                    <li>Technical consulting</li>
                    <li>Website maintenance</li>
                    <li>Performance optimization</li>
                    <li>Security updates</li>
                    <li>Bug fixes and troubleshooting</li>
                    <li>Training and documentation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Client Responsibilities</h2>
              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-orange-900">You agree to:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Provide accurate and complete project requirements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Respond to requests for information within 48 hours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Provide necessary access to hosting, domains, and accounts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Pay invoices according to agreed payment terms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Respect intellectual property rights and licensing agreements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-orange-800">Not use our services for illegal or harmful purposes</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FaDollarSign className="text-green-600" />
                4. Payment Terms & Pricing
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 text-gray-900">Payment Structure</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Project quotes are valid for 30 days unless otherwise specified</li>
                    <li>Small projects (under $500): 100% payment upfront</li>
                    <li>Medium projects ($500-$2000): 50% upfront, 50% upon completion</li>
                    <li>Large projects (over $2000): 30% upfront, 40% at milestone, 30% upon completion</li>
                    <li>Monthly maintenance services are billed in advance</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-medium mb-2 text-red-900">Payment Policies</h3>
                  <ul className="list-disc list-inside space-y-1 text-red-800 text-sm">
                    <li>Payments are due within 7 days of invoice date</li>
                    <li>Late payments may incur a 2% monthly service charge</li>
                    <li>Work may be suspended for overdue payments</li>
                    <li>All prices are in USD unless otherwise specified</li>
                    <li>Additional work beyond scope requires separate agreement</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-medium mb-2 text-yellow-900">Refund Policy</h3>
                  <p className="text-yellow-800 text-sm">
                    Custom development work is non-refundable once development begins. 
                    Refunds for unused portions of prepaid services may be considered on a case-by-case basis. 
                    Refund requests must be submitted within 7 days of payment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Project Scope & Revisions</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-medium mb-2 text-purple-900">Scope Definition</h3>
                  <p className="text-purple-800 text-sm mb-2">
                    All projects begin with a detailed scope document outlining deliverables, timeline, and costs. 
                    Changes to the agreed scope will require written approval and may incur additional charges.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-medium mb-2 text-blue-900">Revision Policy</h3>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Each project includes 2 rounds of revisions</li>
                    <li>Additional revisions are charged at $50/hour</li>
                    <li>Major scope changes require new project agreement</li>
                    <li>Revisions must be requested within 7 days of delivery</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-medium mb-2 text-green-900">Client Ownership</h3>
                  <p className="text-green-800 text-sm">
                    Upon full payment, you own all custom code, designs, and content created specifically for your project. 
                    This includes source code, databases, graphics, and project-specific documentation.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-medium mb-2 text-blue-900">Our Retained Rights</h3>
                  <p className="text-blue-800 text-sm">
                    We retain rights to our development methods, tools, frameworks, and general programming knowledge. 
                    We may showcase completed projects in our portfolio with your permission.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-medium mb-2 text-yellow-900">Third-Party Components</h3>
                  <p className="text-yellow-800 text-sm">
                    Projects may include third-party libraries, frameworks, or components with their own licensing terms. 
                    You are responsible for compliance with these licenses.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FaShieldAlt className="text-green-600" />
                7. Warranties & Disclaimers
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-yellow-900">Our Warranty</h3>
                <p className="text-yellow-800 mb-4 text-sm">
                  We provide a 30-day warranty on all deliverables to be free from defects in materials and workmanship. 
                  This warranty covers bugs and functionality issues, but not design changes or new feature requests.
                </p>
                <h3 className="text-lg font-medium mb-2 text-yellow-900">Disclaimer</h3>
                <p className="text-yellow-800 text-sm">
                  <strong>SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong> 
                  We do not guarantee that our services will be uninterrupted, error-free, or meet all your requirements. 
                  We are not responsible for third-party service outages or compatibility issues.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Limitation of Liability</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <p className="text-red-800 mb-4 text-sm">
                  Our total liability for any claims arising from our services shall not exceed the amount paid 
                  for the specific service that gave rise to the claim.
                </p>
                <p className="text-red-800 text-sm">
                  <strong>WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES,</strong> 
                  including but not limited to loss of profits, data, revenue, or business interruption, 
                  even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-gray-900">By Client</h3>
                  <p className="text-gray-700 text-sm">
                    You may terminate services at any time with written notice. Payment is due for all work 
                    completed up to the termination date. Completed work will be delivered upon final payment.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-gray-900">By DNL G Experts</h3>
                  <p className="text-gray-700 text-sm">
                    We may terminate services for non-payment, breach of terms, or if continuing would 
                    violate applicable laws. We will provide 7 days notice when possible.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <FaGavel className="text-green-600" />
                10. Governing Law & Disputes
              </h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  These terms are governed by the laws of the Philippines. Any disputes will be resolved 
                  through good faith negotiation first, followed by binding arbitration if necessary.
                </p>
                <p className="text-gray-700 text-sm">
                  All legal proceedings shall take place in Rodriguez, Rizal, Philippines.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on our website 
                and take effect immediately. Continued use of our services constitutes acceptance of the updated terms.
              </p>
              <p className="text-gray-700 text-sm">
                For existing projects, changes will apply to new agreements entered after the effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Contact Information</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">For questions about these terms or our services:</p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-green-600" />
                    <span>Dnl@expertsdev.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-green-600" />
                    <span>+63993 559 9604</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-green-600" />
                    <span>8B San Isidro Rodriguez Rizal</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-gray-500">
            <p>© 2025 DNL G Experts. All rights reserved.</p>
            <p className="text-sm mt-2">
              Fast, Flexible, Future-Ready Digital Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsofService;