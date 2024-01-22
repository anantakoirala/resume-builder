import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex content-center justify-center overflow-hidden">
      <div
        className="grid grid-cols-3 shadow-2xl overflow-hidden max-w-screen-md"
        style={{ width: "816.48px", minHeight: "1120px" }}
      >
        <div className="bg-blue-900 ">
          <div className="flex flex-col justify-center items-center px-2 py-8">
            <div className="mb-2">
              <div className="w-full flex flex-col items-center">
                <img
                  src="https://i.pinimg.com/564x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg"
                  alt=""
                  className="w-32 h-32 object-cover border-2 rounded-full"
                />
                <p className="w-full text-center text-white font-bold  m-1">
                  John Doe
                </p>
                <p className="w-full text-center text-white font-medium  m-1">
                  Creative and Innovative Web Developer
                </p>
              </div>
            </div>
            <div className="mb-5 w-full"></div>
            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">Contacts</p>

              <div className="mb-2 ">
                <div className="flex items-start gap-x-2 ">
                  <div className="flex flex-row items-center gap-x-2">
                    <i className="ph ph-bold ph-at"></i>
                    <p className="">johndoe@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <i className="ph ph-bold ph-phone"></i>
                    <div>LinkedIn</div>
                  </div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <i className="ph ph-bold ph-map-pin"></i>
                    <div>LinkedIn</div>
                  </div>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-row items-center gap-x-2">
                    <i className="ph ph-bold ph-link"></i>
                    <div>LinkedIn</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">Profiles</p>

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
            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">Skills</p>

              <div className="mb-2">
                <p className="text-white font-bold mb-2">WebFrameworks</p>
                <div>Intermediate</div>
                <p>html, js, photoshop</p>
              </div>
              <div className="mb-2">
                <p className="text-white font-bold mb-2">Tools</p>
                <div>Intermediate</div>
                <div className="flex items-center gap-x-1">
                  <div className="h-2.5 w-5  bg-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                </div>

                <p>html, js, photoshop</p>
              </div>
            </div>
            {/* certifications */}
            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">
                Certifications
              </p>

              <div className="mb-2">
                <p className="text-white font-bold mb-2">
                  AWS Certified Developer
                </p>
                <div>Intermediate</div>
                <p>2019</p>
              </div>
            </div>
            {/* languages */}
            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">Languages</p>

              <div className="mb-2">
                <p className="text-white font-bold ">English</p>
                <div>Very Good</div>
                <div className="flex items-center gap-x-1">
                  <div className="h-2.5 w-5  bg-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                  <div className="h-2.5 w-5 border border-yellow-400"></div>
                </div>
              </div>
            </div>
            {/* publications */}
            <div className="text-white pl-5 w-full mb-4">
              <p className="text-white font-bold mb-2 border-b">Publications</p>

              <div className="mb-2">
                <p className="text-white font-bold mb-2">Publication name</p>
                <div>Publisher</div>
                <p>2019</p>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-link"></i>
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
        <div className="bg-yellow-100 col-span-2">
          <div className="flex flex-col justify-center items-center px-7 py-8">
            {/* summary */}
            <div className="w-full  mb-10">
              laskdfjlasdkfj aldsfj asdlfkj asdlfj adslfj asdlfkja sdflakjsdf
              lasdkfj lasdfkj alsdfkj alsdkfj
            </div>
            {/* experience */}
            <div className="w-full mb-5">
              <p className="text-black font-bold mb-2 border-b border-blue-900">
                Experience
              </p>
              {/* experience list */}
              <div className="flex flex-col mb-4">
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
                  <i className="ph ph-bold ph-link"></i>
                  <div>LinkedIn</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate rerum cum repudiandae, tempora quisquam modi
                  doloribus ducimus earum nihil impedit dolores laboriosam ea,
                  sunt explicabo blanditiis nulla nemo odio voluptatibus ipsam
                </p>
              </div>
              <div className="flex flex-col mb-4">
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
                  <i className="ph ph-bold ph-link"></i>
                  <div>LinkedIn</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate rerum cum repudiandae, tempora quisquam modi
                </p>
              </div>
            </div>
            {/* education */}
            <div className="w-full mb-5">
              <p className="text-black font-bold mb-2 border-b border-blue-900">
                Education
              </p>
              {/* experience list */}
              <div className="flex flex-col mb-4">
                <div className="flex flex-row justify-between">
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
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-bold text-left">
                      Creative Solutions Inc.
                    </p>
                    <p className="font-normal text-left">
                      Senior Web Developer
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-right">
                      January 2019 to Present
                    </p>
                    <p className="font-normal text-right">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            {/* projects */}
            <div className="w-full mb-5">
              <p className="text-black font-bold mb-2 border-b border-blue-900">
                Projects
              </p>
              {/* Projects list */}
              <div className="flex flex-col mb-4">
                <div className="flex flex-row justify-between">
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
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-link"></i>
                  <div>LinkedIn</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate rerum cum repudiandae, tempora quisquam modi
                  doloribus ducimus earum nihil impedit dolores laboriosam ea,
                  sunt explicabo blanditiis nulla nemo odio voluptatibus ipsam
                </p>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex flex-row justify-between">
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
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <i className="ph ph-bold ph-link"></i>
                  <div>LinkedIn</div>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptate rerum cum repudiandae, tempora quisquam modi
                  doloribus ducimus earum nihil impedit dolores laboriosam ea,
                  sunt explicabo blanditiis nulla nemo odio voluptatibus ipsam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
