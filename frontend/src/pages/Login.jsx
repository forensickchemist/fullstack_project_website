import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/base";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useContext(AuthContext);
  const nav = useNavigate();

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/token/`, {
        username: form.username,
        password: form.password,
      });
      console.log("Very nice");
      setIsAuthenticated(true);
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
    } catch (err) {
      setIsAuthenticated(false);
      console.log(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login
    handleLogin();

    if (localStorage.getItem("access_token")) {
      nav("/profile", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page content */}
      <main className="flex min-h-[calc(100vh-88px)] items-start justify-center px-6 pt-20">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)]">
          <div className="px-10 py-10">
            <h1 className="text-3xl font-semibold text-[#0a1f45]">Sign In</h1>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-800">
                  Username
                </label>
                <input
                  name="username"
                  value={form.username}
                  onChange={onChange}
                  type="text"
                  className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-[#0a1f45] focus:ring-2 focus:ring-[#0a1f45]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-800">
                  Password
                </label>
                <input
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  type="password"
                  className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-[#0a1f45] focus:ring-2 focus:ring-[#0a1f45]/20"
                />
              </div>

              <button
                type="submit"
                className="h-10 w-full rounded-md bg-[#0a1f45] text-sm font-semibold text-white hover:opacity-95"
              >
                Login
              </button>

              <div className="pt-1">
                <p className="text-xs font-semibold text-[#0a1f45]">
                  Don&apos;t have account yet?
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
