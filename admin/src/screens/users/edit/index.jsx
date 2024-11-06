"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { getUniqueUser, updateUser } from "@/actions/userActions";

const EditUser = async ({ params }) => {
  // const id = parseInt(params.userId);

  // console.log(id);

  // const userData = await getUniqueUser(id);
  // console.log(userData);

  return (
    <div>
      <h1 className="text-3xl font-semibold p-2">Edit User</h1>
      <form
        className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
        // action={updateUser(FormData, params.userid)}
      >
        {
          // errorMessage && (
          //   <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-500 w-fit">
          //     <span className="text-red-500 col-span-2 text-md my=0 font-500">
          //       {errorMessage}
          //     </span>
          //   </div>
          // )
        }
        <div className="grid gap-2">
          <Label required={true}>Username</Label>
          <Input
            placeholder="Enter username"
            name="username"
            // defaultValue={userData.userName}
          />
        </div>
        <div className="grid gap-2">
          <Label required={true}>User Type</Label>

          <select
            // className="custom-input appearance-none cursor-pointer"
            name="usertype"
            // defaultValue={userData.userType}
          >
            <option value="">Select User Type</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="grid gap-2">
          <Label>Reset Password</Label>

          <Input
            placeholder="Enter Password"
            name="password"
            // defaultValue={userData.password}
          />
        </div>
        <div className="grid gap-2">
          <Label>Confirm Password</Label>
          <Input placeholder="Re-Enter Password" name="confirmPassword" />
        </div>
        <Button className="w-52 col-span-2 mt-2">Submit</Button>
      </form>
    </div>
  );
};
export default EditUser;
