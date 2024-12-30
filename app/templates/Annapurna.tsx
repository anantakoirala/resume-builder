"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Annapurna = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);

  const summary = resume.data.summary.content;
  const profiles = resume.data.sections.profiles;
  const skills = resume.data.sections.skills;
  const cerfifications = resume.data.sections.certifications;
  const languages = resume.data.sections.languages;
  const publications = resume.data.sections.publications;
  const experiences = resume.data.sections.experiences;
  const educations = resume.data.sections.educations;
  const projects = resume.data.sections.projects;
  const interests = resume.data.sections.interests;
  const awards = resume.data.sections.awards;
  const volunterring = resume.data.sections.volunteers;

  const { basics } = resume.data;
  return (
    <div
      className="flex content-center justify-center overflow-hidden font-roboto"
      data-id="annapurna"
      style={{ fontFamily: resume.data.metadata.font }}
    >
      <div id="template">
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
                <div>{basics.name}</div>
                <div>{basics.headline}</div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                  {basics.location && (
                    <div className="flex items-center gap-x-1.5">
                      <i className="ph ph-bold ph-map-pin text-primary" />
                      <div>{basics.location}</div>
                    </div>
                  )}
                  {basics.phone && (
                    <div className="flex items-center gap-x-1.5">
                      <i className="ph ph-bold ph-phone text-primary" />
                      <a
                        href={`tel:${basics.phone}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {basics.phone}
                      </a>
                    </div>
                  )}
                  {basics.email && (
                    <div className="flex items-center gap-x-1.5">
                      <i className="ph ph-bold ph-at text-primary" />
                      <a
                        href={`mailto:${basics.email}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {basics.email}
                      </a>
                    </div>
                  )}
                  {basics.email && (
                    <div className="flex items-center gap-x-1.5">
                      <i className="ph ph-bold ph-at text-primary" />
                      <a
                        href={`mailto:${basics.url.href}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {basics.url.href}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              {/* sidebar */}
              <div className=" ">
                <div className="flex flex-col justify-center items-center px-2 py-8">
                  {profiles.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Profiles
                      </p>
                      {profiles.items &&
                        profiles.items.map((item, index) => (
                          <div className="mb-2" key={index}>
                            <div className="flex flex-row gap-2 items-center">
                              <img
                                src="https://cdn.simpleicons.org/facebook"
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
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Skills
                      </p>

                      {skills.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="text-black font-bold mb-2">Tools</p>
                          <div>Intermediate</div>

                          {item.level > 0 && (
                            <div className="flex items-center gap-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-2.5 w-5 ${
                                    i < item.level
                                      ? "bg-primary"
                                      : "border border-primary"
                                  }`}
                                ></div>
                              ))}
                            </div>
                          )}

                          {item.keywords !== undefined &&
                            item.keywords.length > 0 && (
                              <p className="text-sm">
                                {item.keywords.join(", ")}
                              </p>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* certifications */}
                  {cerfifications.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Certifications
                      </p>
                      {cerfifications.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="text-black font-bold mb-2">
                            {item.name}
                          </p>
                          <div>{item.issuer}</div>
                          <p>{item.date}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* languages */}

                  {languages.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Languages
                      </p>
                      {languages.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="text-black font-bold ">{item.name}</p>
                          <div>{item.description}</div>
                          <div className="flex items-center gap-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-2.5 w-5 ${
                                  i < item.level
                                    ? "bg-primary"
                                    : "border border-primary"
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
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Publications
                      </p>

                      {publications.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className=" font-bold mb-2">{item.name}</p>
                          <div>{item.publisher}</div>
                          <p className="text-sm">{item.date}</p>
                          {item.url.href && (
                            <div className="flex flex-row items-center gap-x-2">
                              <i className="ph ph-bold ph-link text-primary"></i>
                              <div>{item.url.href}</div>
                            </div>
                          )}

                          <p>{item.summary}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* awards */}
                  {awards.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Awards
                      </p>

                      {awards.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="font-bold mb-2">{item.title}</p>
                          <div>{item.awarder}</div>
                          <p className="text-sm">{item.date}</p>
                          {item.url.href && (
                            <div className="flex flex-row items-center gap-x-2">
                              <i className="ph ph-bold ph-link text-primary"></i>
                              <div>{item.url.href}</div>
                            </div>
                          )}

                          <div
                            dangerouslySetInnerHTML={{ __html: item.summary }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* voluntering */}
                  {volunterring.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Volunteering
                      </p>

                      {volunterring.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="font-bold mb-2">{item.organization}</p>
                          <div>{item.position}</div>
                          <p className="text-sm">{item.date}</p>
                          {item.url.href && (
                            <div className="flex flex-row items-center gap-x-2">
                              <i className="ph ph-bold ph-link text-primary"></i>
                              <div>{item.url.href}</div>
                            </div>
                          )}

                          <div
                            dangerouslySetInnerHTML={{ __html: item.summary }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* interests */}
                  {interests.items.length > 0 && (
                    <div className="text-black pl-5 w-full mb-4">
                      <p className="text-black font-bold mb-2 border-b text-primary">
                        Interests
                      </p>

                      {interests.items.map((item, index) => (
                        <div className="mb-2" key={index}>
                          <p className="text-black font-bold mb-2">
                            {item.name}
                          </p>

                          {item.keywords !== undefined &&
                            item.keywords.length > 0 && (
                              <p className="text-sm">
                                {item.keywords.join(", ")}
                              </p>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* main content */}
              <div className=" col-span-2 ">
                <div className="flex flex-col justify-center items-center px-7 py-8">
                  {/* summary */}

                  <div
                    className="w-full  mb-4 wysiwyg"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  ></div>
                  {/* experience */}
                  {experiences.items.length > 0 && (
                    <div className="w-full mb-5">
                      <p className="text-black font-bold mb-2 border-b border-blue-900">
                        Experience
                      </p>
                      {/* experience list */}
                      {experiences.items.map((item, index) => (
                        <div
                          className="flex flex-col mb-4 relative"
                          key={index}
                        >
                          <div className="relative pl-3">
                            <div className="flex flex-row justify-between">
                              <div>
                                <p className="font-bold">{item.company}</p>
                                <p className="font-normal">{item.position}</p>
                              </div>
                              <div>
                                <p className="font-bold">{item.date}</p>
                                <p className="font-normal">{item.location}</p>
                              </div>
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                              <i className="ph ph-bold ph-link text-primary"></i>
                              <div>{item.url.href}</div>
                            </div>
                            <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                          </div>

                          <div
                            className="pl-3 wysiwyg"
                            dangerouslySetInnerHTML={{ __html: item.summary }}
                          ></div>
                          <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* education */}
                  {educations.items.length > 0 && (
                    <div className="w-full mb-5">
                      <p className="text-black font-bold mb-2 border-b border-blue-900">
                        Education
                      </p>
                      {/* education list */}
                      {educations.items.map((item, index) => (
                        <div
                          className="flex flex-col mb-4 relative"
                          key={index}
                        >
                          <div className="flex flex-row justify-between pl-3">
                            <div>
                              <p className="font-bold text-left">
                                {item.institution}
                              </p>
                              <p className="font-normal text-left">
                                {item.area}
                              </p>
                            </div>
                            <div>
                              <p className="font-bold text-right">
                                {item.date}
                              </p>
                              <p className="font-normal text-right">
                                {item.studyType}
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-y-0  border-l-[4px] border-primary "></div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* projects */}
                  {projects.items.length > 0 && (
                    <div className="w-full mb-5">
                      <p className="text-black font-bold mb-2 border-b border-blue-900">
                        Projects
                      </p>
                      {/* Projects list */}
                      {projects.items.map((item, index) => (
                        <div
                          className="flex flex-col mb-4 relative"
                          key={index}
                        >
                          <div className="relative pl-3">
                            <div className="flex flex-row justify-between">
                              <div className="pr-5">
                                <p className="font-bold">{item.name}</p>
                                <p className="font-normal">
                                  {item.description}
                                </p>
                              </div>
                              <div className="">
                                <p className="font-bold">{item.date}</p>
                              </div>
                            </div>
                            <div className="flex flex-row items-center gap-x-2">
                              <i className="ph ph-bold ph-link text-primary"></i>
                              <div>{item.url.href}</div>
                            </div>
                            <div className="absolute inset-y-0 -left-px border-l-[4px] border-primary" />
                          </div>

                          <div
                            className="pl-3 wysiwyg"
                            dangerouslySetInnerHTML={{ __html: item.summary }}
                          ></div>
                          {item.keywords !== undefined &&
                            item.keywords.length > 0 && (
                              <p className="pl-3 text-sm">
                                {item.keywords.join(", ")}
                              </p>
                            )}
                          <div className="absolute inset-y-0  border-l-[2px] border-primary" />
                        </div>
                      ))}
                    </div>
                  )}
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
