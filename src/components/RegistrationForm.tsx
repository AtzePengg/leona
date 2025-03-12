
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Send, UserPlus, Heart, AlertCircle } from 'lucide-react';
import { toast } from "sonner";

interface FormData {
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  allergies: string;
  message: string;
}

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    numberOfGuests: 1,
    allergies: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.childName.trim()) {
      newErrors.childName = "Child's name is required";
    }
    
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      // Show error toast
      toast.error("Please fix the errors in the form", {
        description: "Some required information is missing or invalid."
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      
      // Show success toast
      toast.success("Registration successful!", {
        description: "You've successfully registered for Leona's birthday party."
      });
      
      // Navigate to confirmation page with form data
      navigate('/confirmation', { state: { formData } });
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="dollhouse-card p-8 md:p-12">
        <div className="mb-8 text-center">
          <h3 className="font-bubblegum text-3xl md:text-4xl text-dollhouse-purple mb-2">
            Join Leona's Party!
          </h3>
          <p className="text-gray-600">
            Please fill in the form below to RSVP
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="childName">
                Child's Name *
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                className={`dollhouse-input ${errors.childName ? 'border-red-500' : ''}`}
                placeholder="Child's name"
              />
              {errors.childName && (
                <p className="mt-1 text-red-500 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.childName}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="parentName">
                Parent's Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={`dollhouse-input ${errors.parentName ? 'border-red-500' : ''}`}
                placeholder="Parent's name"
              />
              {errors.parentName && (
                <p className="mt-1 text-red-500 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.parentName}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`dollhouse-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`dollhouse-input ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="Phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 flex items-center">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="numberOfGuests">
              Number of Guests (including child)
            </label>
            <select
              id="numberOfGuests"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              className="dollhouse-input"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="allergies">
              Food Allergies or Dietary Restrictions
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="dollhouse-input"
              placeholder="Any allergies or dietary restrictions?"
            />
          </div>
          
          <div>
            <label className="block text-dollhouse-purple font-bold mb-2" htmlFor="message">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="dollhouse-input !rounded-2xl"
              placeholder="Any message for Leona and family?"
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="dollhouse-button w-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {submitting ? (
                  <>
                    <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Registering...
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2" size={20} />
                    Register for the Party!
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-dollhouse-orange to-dollhouse-pink transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></span>
            </button>
          </div>
          
          <div className="text-center text-gray-500 text-sm flex items-center justify-center">
            <Heart size={16} className="text-dollhouse-pink mr-2" />
            <span>We can't wait to celebrate with you!</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
