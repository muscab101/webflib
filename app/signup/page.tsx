import { SignUpForm } from "@/components/singup-form"

import { signInWithPopup } from "@firebase/auth";
import { GalleryVerticalEnd } from "lucide-react"


export default function SignUpPage() {


    // const handleLogingWithGoogle = async() => {
    //     try {
    //         await signInWithPopup(auth, googleAuthProvider)
    //     } catch (error) {
    //         console.error("Error logging in with Google:", error);
    //     }
    // }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      
      {/* 1. Dhinaca Sawirka (Hadda waa BIDIX) */}
      <div className="bg-muted relative hidden lg:block border-r">
         <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
        {/* Overlay yar */}
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
        
        <div className="absolute bottom-10 left-10 z-20 text-white">
          {/* <blockquote className="space-y-2">
            <p className="text-lg font-medium">
              "Ku biir suuqa ugu weyn ee lagu kala iibsado website-yada."
            </p>
            <footer className="text-sm opacity-80">Maalgelin mustaqbal leh.</footer>
          </blockquote> */}
        </div>
      </div>

      {/* 2. Dhinaca Form-ka (Hadda waa MIDIG) */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-end"> {/* Geey midigta sare */}
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            WebFlip Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>

    </div>
  )
}