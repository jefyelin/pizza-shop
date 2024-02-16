import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  email: z.string().email(),
  managerName: z.string(),
  phone: z.string(),
  restaurantName: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Restaurant registered successfully.", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("Error occurred while signing up.");
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button className="absolute right-4 top-8" variant="ghost" asChild>
          <Link to="/sign-in">Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start your selling journey!
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Manager name</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Finish registration
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              If you continue, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
