import React from "react";
// import img1 from ''

const Story = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-12 container mx-auto justify-center items-center w-full h-96">
      <div className=" ">
        <h3 className="font-semibold text-2xl">Our Story</h3>
        <p className="text-4xl font-bold py-5">Traditional & Modern Service Since 1970</p>

        <div className="md:hidden mr-15">
        <img
          className=" w-1/2 "
          src={"https://i.ibb.co/P67g9JS/chef.png"}
          alt=""
        />
        {/* <img className="top-0 left-0 lg:mt-28  absolute w-2/12"  src={"https://i.ibb.co/Qm3vcMW/2.png"} alt="" />
        <img className="top-0 right-0 mt-24 mr-48 z-50 w-3/12 absolute"  src={"https://i.ibb.co/vJnYpYd/4.png"} alt="" />
        <img className=" top-0 right-0 mt-16 mr-48 w-3/12 absolute"  src={"https://i.ibb.co/3cwWTXc/3.png"} alt="" /> */}
        </div>



        <p>

          Ut neque turpis dolor sit amet consectetur adipiscing elit purus
          egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget at
          porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac luctus. Hac
          a vel egestas malesuada tellus sed nunc, etiam maecenas.
        </p>
        <button className="btn btn-primary mt-5">Our Story</button>
      </div>
      <div className="relative ">
        <div className="hidden   md:block" >
        <img
          className=" w-1/2"
          src={"https://i.ibb.co/P67g9JS/chef.png"}
          alt=""
        />
        <img className="top-0 left-0 lg:mt-28  absolute w-2/12"  src={"https://i.ibb.co/Qm3vcMW/2.png"} alt="" />
        <img className="top-0 right-0 mt-24 mr-48 z-50 w-3/12 absolute"  src={"https://i.ibb.co/vJnYpYd/4.png"} alt="" />
        <img className=" top-0 right-0 mt-16 mr-48 w-3/12 absolute"  src={"https://i.ibb.co/3cwWTXc/3.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Story;
