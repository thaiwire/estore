import EditUser from "@/screens/users/edit";

const EditUserPage = async ({ params }) => {
  console.log("xx" + params);

  return (
    <>
      <EditUser params={params} />
    </>
  );
};

export default EditUserPage;
