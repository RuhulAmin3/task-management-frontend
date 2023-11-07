"use client";
import Form from "@/components/Forms/Form";
import LoadingSpinner from "@/components/ui/Loading";
import TextInput from "@/components/ui/TextInput";
import { useRegisterMutation } from "@/redux/feature/auth/authApi";
import { isLoggin, setIntoLocalStorage } from "@/utils";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../loading";

const RegisterPage = () => {
  const [register, result] = useRegisterMutation();
  const isUserLoggin = isLoggin("accessToken");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: any) => {
    try {
      const res = await register(data).unwrap();
      if (res?.data?.accessToken) {
        setIntoLocalStorage("accessToken", res?.data?.accessToken);
        router.push("/tasks");
        toast.success("account registered successfully", { autoClose: 1000 });
      }
    } catch (err) {
      toast.error("failed to create user try again later", { autoClose: 1000 });
    }
  };

  useEffect(() => {
    if (!!isUserLoggin) {
      router.push("/tasks");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid content-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Form submitHandler={onSubmit}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Register
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <TextInput
              name="firstName"
              label="First Name"
              size="lg"
              type="text"
              required
            />
            <TextInput
              name="lastName"
              label="Last Name"
              size="lg"
              type="text"
              required
            />
            <TextInput
              name="email"
              label="Email"
              size="lg"
              type="email"
              required
            />
            <TextInput
              name="password"
              label="Password"
              size="lg"
              type="password"
              required
            />
            <p className="block antialiased font-light bg-green-50 text-green-500 text-center text-sm p-2 rounded-md">
              register free to manage your daily task
            </p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              color="blue"
              fullWidth
              disabled={result.isLoading}
            >
              {result.isLoading ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                "Register"
              )}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as={Link}
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                href="/login"
              >
                Sign In
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};

export default RegisterPage;
