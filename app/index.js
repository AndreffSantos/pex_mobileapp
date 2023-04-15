import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  useEffect(() => router.push('/onboarding'))

  return <></>;
}
