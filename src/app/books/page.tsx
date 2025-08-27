import client from "@/lib/wix";

export default function Home() {
    const books = await client.items.queryDataItems({
        dataCollectionId: "Books",
    })
    .find()
    .then((res) => res.items.map((item) => item.data));

    console.log(books);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-2xl font-bold">Books</h1>
      
    </div>
  );
}
