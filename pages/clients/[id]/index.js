import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
        pathname: "/clients/[id]/[clientprojectid]",
        query: { id: 'max', clientprojectid: 'projecta'},
    });
  }

  return (
    <div>
      <h1>Project given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default index;
