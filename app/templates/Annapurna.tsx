import React from "react";

type Props = {};

const Annapurna = (props: Props) => {
  return (
    <div className="flex content-center justify-center overflow-hidden ">
      <div
        className="shadow-2xl overflow-hidden max-w-screen-md border"
        style={{ width: "816.48px", minHeight: "1120px" }}
      >
        <div className="flex flex-col ">
          {/* header */}
          <div className="w-full  h-full">
            <div className="flex flex-col items-center p-4">
              <div className="w-24 h-24 bg-slate-50">
                <img
                  src="https://i.pinimg.com/564x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg"
                  alt=""
                  className="w-24 h-24 object-cover border-2 "
                />
              </div>
              <div>John doe</div>
              <div>headline</div>
              <div className="flex  flex-wrap items-center">
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-at text-primary"></i>
                  <p className="">johndoe@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-at text-primary"></i>
                  <p className="">johndoe@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-at text-primary"></i>
                  <p className="">johndoe@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-at text-primary"></i>
                  <p className="">johndoe@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {/* sidebar */}
            <div className=" ">
              <div className="flex flex-col justify-center items-center px-2 py-8">
                <div className="text-black pl-5 w-full mb-4">
                  <p className="text-black font-bold mb-2 border-b text-primary">
                    Profiles
                  </p>

                  <div className="mb-2">
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        src="https://cdn.simpleicons.org/facebook"
                        alt="Tailwind-CSS-Avatar-component"
                        className="w-4 h-4"
                      />
                      <div style={{ fontSize: "12px" }}>Username</div>
                    </div>
                    <div>LinkedIn</div>
                  </div>
                  <div className="mb-2">
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        src="https://cdn.simpleicons.org/instagram"
                        alt="Tailwind-CSS-Avatar-component"
                        className="w-4 h-4 "
                      />
                      <div style={{ fontSize: "12px" }}>Username</div>
                    </div>
                    <div>LinkedIn</div>
                  </div>
                </div>
                {/* skills */}
                <div className="text-black pl-5 w-full mb-4">
                  <p className="text-black font-bold mb-2 border-b text-primary">
                    Skills
                  </p>

                  <div className="mb-2">
                    <p className="text-black font-bold mb-2">WebFrameworks</p>
                    <div>Intermediate</div>
                    <p>html, js, photoshop</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-black font-bold mb-2">Tools</p>
                    <div>Intermediate</div>
                    <div className="flex items-center gap-x-1">
                      <div className="h-2.5 w-5  bg-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                    </div>

                    <p>html, js, photoshop</p>
                  </div>
                </div>
                {/* certifications */}
                <div className="text-black pl-5 w-full mb-4">
                  <p className="text-black font-bold mb-2 border-b text-primary">
                    Certifications
                  </p>

                  <div className="mb-2">
                    <p className="text-black font-bold mb-2">
                      AWS Certified Developer
                    </p>
                    <div>Intermediate</div>
                    <p>2019</p>
                  </div>
                </div>
                {/* languages */}
                <div className="text-black pl-5 w-full mb-4">
                  <p className="text-black font-bold mb-2 border-b text-primary">
                    Languages
                  </p>

                  <div className="mb-2">
                    <p className="text-black font-bold ">English</p>
                    <div>Very Good</div>
                    <div className="flex items-center gap-x-1">
                      <div className="h-2.5 w-5  bg-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                      <div className="h-2.5 w-5 border border-primary"></div>
                    </div>
                  </div>
                </div>
                {/* publications */}
                <div className="text-black pl-5 w-full mb-4">
                  <p className="text-black font-bold mb-2 border-b text-primary">
                    Publications
                  </p>

                  <div className="mb-2">
                    <p className="text-black font-bold mb-2">
                      Publication name
                    </p>
                    <div>Publisher</div>
                    <p>2019</p>
                    <div className="flex flex-row items-center gap-x-2">
                      <i className="ph ph-bold ph-link text-primary"></i>
                      <div>LinkedIn</div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt recusandae doloremque architecto ut nemo nisi,
                      deserunt quia ullam numquam ex.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* main content */}
            <div className=" col-span-2 ">
              <div className="flex flex-col justify-center items-center px-7 py-8">
                {/* summary */}

                <div className="w-full  mb-4 wysiwyg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, unde.
                </div>
                {/* experience */}
                <div className="w-full mb-5">
                  <p className="text-black font-bold mb-2 border-b border-blue-900">
                    Experience
                  </p>
                  {/* experience list */}
                  <div className="flex flex-col mb-4 relative">
                    <div className="relative pl-3">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p className="font-bold">Creative Solutions Inc.</p>
                          <p className="font-normal">Senior Web Developer</p>
                        </div>
                        <div>
                          <p className="font-bold">January 2019 to Present</p>
                          <p className="font-normal">San Francisco, CA</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-link text-primary"></i>
                        <div>LinkedIn</div>
                      </div>
                      <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                    </div>

                    <div className="pl-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate rerum cum repudiandae, tempora quisquam modi
                    </div>
                    <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                  </div>
                  <div className="flex flex-col mb-4 relative">
                    <div className="relative pl-3">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p className="font-bold">Creative Solutions Inc.</p>
                          <p className="font-normal">Senior Web Developer</p>
                        </div>
                        <div>
                          <p className="font-bold">January 2019 to Present</p>
                          <p className="font-normal">San Francisco, CA</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-link text-primary"></i>
                        <div>LinkedIn</div>
                      </div>
                      <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                    </div>

                    <div className="pl-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate rerum cum repudiandae, tempora quisquam modi
                    </div>
                    <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                  </div>
                </div>
                {/* education */}
                <div className="w-full mb-5">
                  <p className="text-black font-bold mb-2 border-b border-blue-900">
                    Education
                  </p>
                  {/* education list */}
                  <div className="flex flex-col mb-4 relative">
                    <div className="flex flex-row justify-between pl-3">
                      <div>
                        <p className="font-bold text-left">
                          University of California
                        </p>
                        <p className="font-normal text-left">Berkeley, CA</p>
                      </div>
                      <div>
                        <p className="font-bold text-right">
                          August 2012 to May 2016
                        </p>
                        <p className="font-normal text-right">
                          Bachelors in Computer Science
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-y-0  border-l-[4px] border-primary "></div>
                  </div>
                  <div className="flex flex-col mb-4 relative">
                    <div className="flex flex-row justify-between pl-3">
                      <div>
                        <p className="font-bold text-left">
                          University of California
                        </p>
                        <p className="font-normal text-left">Berkeley, CA</p>
                      </div>
                      <div>
                        <p className="font-bold text-right">
                          August 2012 to May 2016
                        </p>
                        <p className="font-normal text-right">
                          Bachelors in Computer Science
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-y-0  border-l-[4px] border-primary "></div>
                  </div>
                </div>
                {/* projects */}
                <div className="w-full mb-5">
                  <p className="text-black font-bold mb-2 border-b border-blue-900">
                    Projects
                  </p>
                  {/* Projects list */}
                  <div className="flex flex-col mb-4 relative">
                    <div className="relative pl-3">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p className="font-bold">University of California</p>
                          <p className="font-normal">Berkeley, CA</p>
                        </div>
                        <div>
                          <p className="font-bold">January 2019 to Present</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-link text-primary"></i>
                        <div>LinkedIn</div>
                      </div>
                      <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                    </div>

                    <div className="pl-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate rerum cum repudiandae, tempora quisquam modi
                    </div>
                    <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                  </div>
                  <div className="flex flex-col mb-4 relative">
                    <div className="relative pl-3">
                      <div className="flex flex-row justify-between">
                        <div>
                          <p className="font-bold">University of California</p>
                          <p className="font-normal">Berkeley, CA</p>
                        </div>
                        <div>
                          <p className="font-bold">January 2019 to Present</p>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-link text-primary"></i>
                        <div>LinkedIn</div>
                      </div>
                      <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                    </div>

                    <div className="pl-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate rerum cum repudiandae, tempora quisquam modi
                    </div>
                    <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annapurna;
