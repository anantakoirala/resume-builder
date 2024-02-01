"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Everest = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);
  const summary = resume.data.summary.content;
  const profiles = resume.data.sections.profiles;
  const skills = resume.data.sections.skills;
  const cerfifications = resume.data.sections.certifications;
  const languages = resume.data.sections.languages;
  const publications = resume.data.sections.publications;
  const { basics } = resume.data;
  return (
    <>
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
                    {basics.name}
                  </p>
                  <p className="w-full text-center text-white font-medium  m-1">
                    {basics.headline}
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
                      <p className="">{basics.email}</p>
                    </div>
                  </div>
                  {basics.phone && (
                    <div className="flex items-start gap-x-2">
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-phone"></i>
                        <div>{basics.phone}</div>
                      </div>
                    </div>
                  )}
                  {basics.location && (
                    <div className="flex items-start gap-x-2">
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-map-pin"></i>
                        <div>{basics.location}</div>
                      </div>
                    </div>
                  )}
                  {basics.url.href && (
                    <div className="flex items-start gap-x-2">
                      <div className="flex flex-row items-center gap-x-2">
                        <i className="ph ph-bold ph-link"></i>
                        <div>{basics.url.href}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* profiles */}
              {profiles.items.length > 0 && (
                <div className="text-white pl-5 w-full mb-4">
                  <p className="text-white font-bold mb-2 border-b">Profiles</p>
                  {profiles.items &&
                    profiles.items.map((item, index) => (
                      <div className="mb-2" key={index}>
                        <div className="flex flex-row gap-2 items-center">
                          <img
                            src={`https://cdn.simpleicons.org/${item.network}`}
                            alt="Tailwind-CSS-Avatar-component"
                            className="w-4 h-4"
                          />
                          <div style={{ fontSize: "12px" }}>
                            {item.username}
                          </div>
                        </div>
                        <div>{item.network}</div>
                      </div>
                    ))}
                </div>
              )}

              {/* skills */}
              {skills.items.length > 0 && (
                <div className="text-white pl-5 w-full mb-4">
                  <p className="text-white font-bold mb-2 border-b">Skills</p>

                  {skills.items &&
                    skills.items.map((skill, index) => (
                      <div className="mb-2" key={index}>
                        <p className="text-white font-bold mb-2">
                          {skill.name}
                        </p>
                        <div>{skill.description}</div>

                        {skill.level > 0 && (
                          <div className="flex items-center gap-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-2.5 w-5 ${
                                  i < skill.level
                                    ? "bg-yellow-400"
                                    : "border border-yellow-400"
                                }`}
                              ></div>
                            ))}
                          </div>
                        )}
                        {skill.keywords !== undefined &&
                          skill.keywords.length > 0 && (
                            <p className="text-sm">
                              {skill.keywords.join(", ")}
                            </p>
                          )}
                      </div>
                    ))}
                </div>
              )}

              {/* certifications */}
              {cerfifications.items.length > 0 && (
                <div className="text-white pl-5 w-full mb-4">
                  <p className="text-white font-bold mb-2 border-b">
                    Certifications
                  </p>
                  {cerfifications.items.map((item, index) => (
                    <div className="mb-2" key={index}>
                      <p className="text-white font-bold mb-2">{item.name}</p>
                      <div>{item.issuer}</div>
                      <p>{item.date}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* languages */}
              {languages.items.length > 0 && (
                <div className="text-white pl-5 w-full mb-4">
                  <p className="text-white font-bold mb-2 border-b">
                    Languages
                  </p>
                  {languages.items.map((item, index) => (
                    <div className="mb-2" key={index}>
                      <p className="text-white font-bold ">{item.name}</p>
                      <div>{item.description}</div>
                      <div className="flex items-center gap-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2.5 w-5 ${
                              i < item.level
                                ? "bg-yellow-400"
                                : "border border-yellow-400"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* publications */}
              {publications.items.length > 0 && (
                <div className="text-white pl-5 w-full mb-4">
                  <p className="text-white font-bold mb-2 border-b">
                    Publications
                  </p>
                  {publications.items.map((item, index) => (
                    <div className="mb-2" key={index}>
                      <p className="text-white font-bold mb-2">{item.name}</p>
                      <div>{item.publisher}</div>
                      <p className="text-sm">{item.date}</p>
                      {item.url.href && (
                        <div className="flex flex-row items-center gap-x-2">
                          <i className="ph ph-bold ph-link"></i>
                          <div>{item.url.href}</div>
                        </div>
                      )}

                      <p>{item.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* main content */}
          <div className="bg-yellow-100 col-span-2">
            <div className="flex flex-col justify-center items-center px-7 py-8">
              {/* summary */}

              <div
                className="w-full  mb-10 wysiwyg"
                dangerouslySetInnerHTML={{ __html: summary }}
              ></div>
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
                      <p className="font-normal text-right">
                        San Francisco, CA
                      </p>
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
    </>
  );
};

export default Everest;
