import { Input } from "antd";
import { IoIosSearch } from "react-icons/io";
function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-[6.25rem] py-[.6875rem]">
          <img
            className="h-[56px] object-cover object-left-top"
            src="https://s3-alpha-sig.figma.com/img/9a05/73df/0ca0ae1968d48e6197e45436cda42bd9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lH8t12-MT7jkGZ8c7HyNBHEFEZBgvGZBiLWw6y7WJzPYEGIRtjefH3ZvuZTEqqSLdG7vsZAorUkLngqQJMf4YF9eQaPIdCWkTJG9Qk9kpC0CPNImaqDKzRXSGkyIA2BHtHs-OIcVGq0cUUE~mgctoICk9Iar3am4S2~VWL8PVt8bxWN9V2RCUnZv5ERi~Kr51Zk9pocPYAmhplsvcVDSid~0w6n8QIhLYbT-4rQSrlbmMkVQ58Ts2NhrHVr5I3za8cw-KMREhAnm9lFvfWL9vzy3bAwSETZJ3R~6Acg8XfHYbwtQH9GQVhEzuTE4iJr6JWWjdviFUSFPyXKhVpC~NQ__"
            alt=""
          />
      
        <div className="border-[1px] border-[#CBA343] rounded-[5px] flex items-center py-[8px] px-[10px] gap-2">
          <IoIosSearch className="size-[1.125rem] text-[#dbdbdb]" />
          <Input className="border-none p-0 text-[12px]" placeholder="Search here..." />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Navbar;
