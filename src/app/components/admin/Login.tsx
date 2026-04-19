import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (credentials.email && credentials.password) {
      localStorage.setItem("cms_authenticated", "true");
      toast.success("Welcome back");
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <h1 className="text-5xl font-light tracking-tight text-black mb-4">
            CMS Login
          </h1>
          <p className="text-gray-600">Access your content management system</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm tracking-wider text-gray-400 mb-3">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="w-full bg-transparent border-b border-gray-300 pb-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
              placeholder="admin@opero.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm tracking-wider text-gray-400 mb-3">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full bg-transparent border-b border-gray-300 pb-3 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="inline-flex items-center text-sm tracking-wider border-b-2 border-black pb-1 hover:border-gray-400 transition-colors group"
            >
              SIGN IN
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Demo credentials: Use any email and password
          </p>
        </div>
      </div>
    </div>
  );
}
