import { createUser } from "@/actions/userActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import AddUser from "@/screens/users/add";

export default function ({ searchParams }) {
  return <AddUser searchParams={searchParams} />;
}
