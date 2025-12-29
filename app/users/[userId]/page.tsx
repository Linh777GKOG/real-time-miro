interface UserIdPageProps {
  params: Promise<{
    userId: string;
  }>;
}

const Page = async ({ params }: UserIdPageProps) => {
  const { userId } = await params;

  return <div>User Id: {userId}</div>;
};

export default Page;
