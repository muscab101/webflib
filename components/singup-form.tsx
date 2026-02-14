"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  updateProfile 
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  // --- 1. EMAIL IYO PASSWORD SIGN UP ---
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      // Create user in Auth
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      // Update Firebase Auth Profile Name
      await updateProfile(user, { displayName: userName });

      // Save user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: userName,
        email: email,
        photoURL: "", // Email signup badanaa ma laha sawir bilowga
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        role: "user",
      });

      router.push('/');
      router.refresh(); 

    } catch (error: any) {
      console.error("Signup Error:", error);
      if (error.code === 'auth/email-already-in-use') {
        setError("Email-kaan mar hore ayaa la isticmaalay.");
      } else if (error.code === 'auth/weak-password') {
        setError("Password-ka waa inuu ka badnaadaa 6 xaraf.");
      } else {
        setError("Cillad ayaa dhacday. Fadlan isku day mar kale.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // --- 2. GOOGLE SIGN IN ---
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save or Update Google user in Firestore
      // Waxaan isticmaaleynaa merge:true si haddii uu hore u jiray aan loo tirtirin
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: serverTimestamp(),
        // Waxaan ku dareynaa createdAt oo kaliya haddii uu cusub yahay
        role: "user",
      }, { merge: true }); 

      router.push('/');
      router.refresh();
    } catch (error: any) {
      console.error("Google Error:", error);
      setError("your google login is something wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignUp} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-primary">Create an account</h1>
          <p className="text-muted-foreground text-sm">
            Join WebFlip today and start trading websites.
          </p>
        </div>

        {error && (
          <div className="bg-destructive/15 text-destructive text-[0.8rem] font-medium p-3 rounded-md border border-destructive/20 text-center">
            {error}
          </div>
        )}

        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            id="name" 
            placeholder="John Doe" 
            required 
            disabled={isLoading}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            required 
            disabled={isLoading}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            id="password" 
            type="password" 
            placeholder="••••••••" 
            required 
            disabled={isLoading}
          />
          <FieldDescription>At least 6 characters.</FieldDescription>
        </Field>

        <Field>
          <Button type="submit" className="w-full font-bold" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </Field>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground italic">
            Or
          </span>
        </div>

        <Button 
          variant="outline" 
          type="button" 
          onClick={handleGoogleSignIn} 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </>
          )}
        </Button>

        <FieldDescription className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="underline underline-offset-4 text-primary font-semibold hover:text-primary/80">
            Login
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}