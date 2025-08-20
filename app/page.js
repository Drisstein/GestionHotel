"use client";
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/auth/login");
  }
}, []);

  return null;
}
