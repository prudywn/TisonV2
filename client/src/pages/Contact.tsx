import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "123 Business District Ave",
        "Suite 500",
        "New York, NY 10001"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+1 (555) 012-3456",
        "Toll-free: +1 (800) 123-4567"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "hello@consultancypro.com",
        "careers@consultancypro.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Saturday: 10:00 AM - 2:00 PM EST",
        "Sunday: Closed"
      ]
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-consultancy-secondary mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? We're here to help. Reach out to discuss 
              your challenges, explore opportunities, and discover how our strategic consulting 
              can drive meaningful results for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-consultancy-secondary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-consultancy-primary rounded-full p-3 mr-4 flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-consultancy-secondary mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-consultancy-secondary mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="tel:+1-555-012-3456"
                      className="flex items-center p-3 bg-consultancy-light-gray rounded-lg hover:bg-consultancy-primary hover:text-white transition-all duration-200 group"
                    >
                      <Phone className="h-5 w-5 mr-3 text-consultancy-primary group-hover:text-white" />
                      <div>
                        <div className="font-semibold">Call Now</div>
                        <div className="text-sm text-gray-600 group-hover:text-blue-100">
                          Speak with a consultant today
                        </div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:hello@consultancypro.com"
                      className="flex items-center p-3 bg-consultancy-light-gray rounded-lg hover:bg-consultancy-accent hover:text-consultancy-secondary transition-all duration-200 group"
                    >
                      <MessageCircle className="h-5 w-5 mr-3 text-consultancy-accent group-hover:text-consultancy-secondary" />
                      <div>
                        <div className="font-semibold">Send Email</div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-700">
                          Get a response within 24 hours
                        </div>
                      </div>
                    </a>
                    
                    <div className="flex items-center p-3 bg-consultancy-light-gray rounded-lg hover:bg-consultancy-secondary hover:text-white transition-all duration-200 group cursor-pointer">
                      <Calendar className="h-5 w-5 mr-3 text-consultancy-secondary group-hover:text-white" />
                      <div>
                        <div className="font-semibold">Schedule Consultation</div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-300">
                          Book a free 30-minute call
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Response Times */}
      <section className="py-20 bg-consultancy-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Office Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-consultancy-primary mr-4" />
                  <h2 className="text-2xl font-bold text-consultancy-secondary">
                    Office Hours
                  </h2>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-consultancy-secondary">
                        {schedule.day}
                      </span>
                      <span className="text-gray-600">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> For urgent matters outside business hours, 
                    please send an email and we'll respond as soon as possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-consultancy-primary mr-4" />
                  <h2 className="text-2xl font-bold text-consultancy-secondary">
                    Response Times
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-green-800">Phone Calls</div>
                      <div className="text-sm text-green-600">During business hours</div>
                    </div>
                    <div className="text-green-800 font-bold">Immediate</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-blue-800">Emails</div>
                      <div className="text-sm text-blue-600">General inquiries</div>
                    </div>
                    <div className="text-blue-800 font-bold">Within 24hrs</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-yellow-800">Proposals</div>
                      <div className="text-sm text-yellow-600">Detailed project quotes</div>
                    </div>
                    <div className="text-yellow-800 font-bold">2-3 days</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-consultancy-primary text-white rounded-lg">
                  <p className="text-sm">
                    <strong>Emergency Support:</strong> Current clients can reach our 
                    emergency hotline at +1 (555) 999-0000 for critical issues.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-consultancy-secondary mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of New York's business district, our office is 
              easily accessible by public transportation and offers convenient parking.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">123 Business District Ave, Suite 500</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-consultancy-secondary mb-6">
                Getting Here
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-consultancy-secondary mb-2">By Subway</h4>
                  <p className="text-gray-600 text-sm">
                    Take the 4, 5, 6 train to Union Square (2 blocks away) or 
                    the N, Q, R, W to 14th Street-Union Square.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-consultancy-secondary mb-2">By Car</h4>
                  <p className="text-gray-600 text-sm">
                    Parking available at the building garage ($25/day) or nearby 
                    public parking structures.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-consultancy-secondary mb-2">By Bus</h4>
                  <p className="text-gray-600 text-sm">
                    Multiple bus lines stop within 1 block of our building, 
                    including the M14, M23, and M103.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-consultancy-light-gray rounded-lg">
                <h4 className="font-semibold text-consultancy-secondary mb-3">
                  Visitor Information
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Check in at the main reception desk on the ground floor</li>
                  <li>• Visitor badges are required and will be provided</li>
                  <li>• WiFi access available for guests</li>
                  <li>• Building has wheelchair accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait – the sooner we start, the sooner you'll see results. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-555-012-3456"
              className="bg-consultancy-accent hover:bg-consultancy-accent/90 text-consultancy-secondary px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a 
              href="mailto:hello@consultancypro.com"
              className="border-2 border-white text-white hover:bg-white hover:text-consultancy-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
