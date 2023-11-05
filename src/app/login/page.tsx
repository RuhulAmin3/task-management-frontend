"use client";
import Form from "@/components/Form";
import TextInput from "@/components/ui/TextInput";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
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
              Only Registered User Can sign in.
            </p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" color="blue" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as={Link}
                href="/register"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Register
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
};

export default LoginPage;
