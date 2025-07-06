import React from 'react';
import { Shield, Database, Users, Globe, Lock, Eye, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-green-600 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 text-lg mb-2">Effective Date: July 6, 2025</p>
          <p className="text-gray-600">Last Updated: July 6, 2025</p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to DNL G Experts. We are a team of freelance web developers specializing in fast, 
            flexible, and future-ready digital solutions. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or engage our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website or services, you agree to the collection and use of information in 
            accordance with this policy. We are committed to protecting your privacy and ensuring 
            your personal information is handled securely.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900 flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-green-600" />
                Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name and contact information (email, phone number)</li>
                <li>Business or company details</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-600" />
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                Project-Related Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Website content and design preferences</li>
                <li>Technical requirements and specifications</li>
                <li>Access credentials for development purposes</li>
                <li>Feedback and revision requests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-green-900">Service Delivery</h3>
              <ul className="list-disc list-inside space-y-2 text-green-800">
                <li>Develop and deliver web solutions</li>
                <li>Provide technical support and maintenance</li>
                <li>Communicate project updates and progress</li>
                <li>Process payments and manage billing</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-blue-900">Business Operations</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Improve our services and website</li>
                <li>Analyze usage patterns and preferences</li>
                <li>Send newsletters and updates (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <p className="text-yellow-800 mb-4">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-yellow-900">Technical Measures</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                  <li>SSL/TLS encryption</li>
                  <li>Secure hosting and databases</li>
                  <li>Regular security updates</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-yellow-900">Organizational Measures</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                  <li>Staff training and awareness</li>
                  <li>Data access restrictions</li>
                  <li>Regular security assessments</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Information Sharing</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">Service Providers:</strong>
                <span className="text-gray-700"> Trusted third parties who assist in operating our website or conducting business</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">Legal Requirements:</strong>
                <span className="text-gray-700"> When required by law or to protect our rights and safety</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">With Your Consent:</strong>
                <span className="text-gray-700"> When you explicitly agree to share information</span>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-purple-800 mb-4">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Restrict data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Cookies and Tracking</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
            and understand where our visitors are coming from.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-gray-900">Types of Cookies We Use:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> Dnl@expertsdev.com</p>
              <p><strong>Phone:</strong> +63993 559 9604</p>
              <p><strong>Address:</strong> 8B San Isidro Rodriguez Rizal</p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/639935599604" className="text-green-600 hover:underline">+63993 559 9604</a></p>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Policy Updates</h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the effective date.
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-green-800">
              <strong>Last Updated:</strong> July 6, 2025 - Initial version published
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;