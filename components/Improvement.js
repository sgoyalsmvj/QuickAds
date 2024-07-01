import React, { useState } from "react";

const ImprovementTable = () => {
  const [showMoreVedix, setShowMoreVedix] = useState(false);
  const [showMoreSkinKraft, setShowMoreSkinKraft] = useState(false);
  const [showMoreTraya, setShowMoreTraya] = useState(false);

  const toggleShowMoreVedix = () => setShowMoreVedix(!showMoreVedix);
  const toggleShowMoreSkinKraft = () =>
    setShowMoreSkinKraft(!showMoreSkinKraft);
  const toggleShowMoreTraya = () => setShowMoreTraya(!showMoreTraya);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Summary Table</h1>
      <div className="overflow-x-auto">
        <div className="max-h-[500px]">
          <table className="min-w-full bg-white border  border-gray-300">
            <thead className="coolButton">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">
                  Company
                </th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Strengths
                </th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Weakness
                </th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Ideas for Improvement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b  text-center font-bold border-gray-300">
                  Vedix
                </td>
                <td className="px-7 border-b border-gray-300">
                  <ul>
                    <li className="list-disc">
                      Customization - Ayurvedic Appeal
                    </li>
                    <li className="list-disc">Testimonials</li>
                    <li className="list-disc">Visual Appeal</li>
                    <li className="list-disc">Clear Messaging</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Lack of visual proof of effectiveness
                </td>
                <td className="py-2 px-4 border-b border-gray-300 max-h-20 overflow-y-auto">
                  <div className="flex flex-col">
                    <span>
                      <b>Before and After Comparisons:</b>
                    </span>
                    <span>
                      <b>Original Scene:</b> A user talks about her hair fall
                      issues after using Vedix products.
                    </span>
                    <span>
                      <b>Original Transcription:</b> "I've been using Vedix for
                      the past three months, and I've seen a significant
                      reduction in my hair fall."
                    </span>
                    {showMoreVedix && (
                      <div className="flex flex-col mt-2">
                        <span>
                          <b>Improved Scene:</b> Show before and after images
                          of the user's hair. "Meet Priya, who struggled with
                          hair fall. After using Vedix, she saw a 70% reduction
                          in just 3 months. See the transformation yourself!"
                        </span>
                        <span>
                          <b>Scientific Backing:</b>
                        </span>
                        <span>
                          <b>Original Scene:</b> The ad briefly mentions the
                          use of Ayurvedic ingredients.
                        </span>
                        <span>
                          <b>Original Transcription:</b> "Vedix uses the power
                          of Ayurveda to treat your hair issues."
                        </span>
                        <span>
                          <b>Improved Scene:</b> Include a dermatologist
                          explaining the science behind Vedix products. "Dr.
                          Mehta, a renowned dermatologist, explains how Vedix's
                          unique formula combines Ayurveda with modern science
                          for effective hair care."
                        </span>
                      </div>
                    )}
                    <button
                      className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={toggleShowMoreVedix}
                    >
                      {showMoreVedix ? "View Less" : "View More"}
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b text-center font-bold border-gray-300">
                  SkinKraft
                </td>
                <td className="px-7 border-b border-gray-300">
                  <ul>
                    <li className="list-disc">Customization</li>
                    <li className="list-disc">Brand Identity</li>
                    <li className="list-disc">Engaging Narration</li>
                    <li className="list-disc">Visuals and Graphics</li>
                    <li className="list-disc">Inclusive Messaging</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Generic voiceover and lack of specific user stories
                </td>
                <td className="py-2 px-4 border-b border-gray-300 max-h-20 overflow-y-auto">
                  <div className="flex flex-col">
                    <span>
                      <b>User Testimonials:</b>
                    </span>
                    <span>
                      <b>Original Scene:</b> A generic voiceover explaining the
                      benefits of SkinKraft without specific user stories.
                    </span>
                    <span>
                      <b>Original Transcription:</b> "SkinKraft provides
                      personalized skincare solutions for every skin type."
                    </span>
                    {showMoreSkinKraft && (
                      <div className="flex flex-col mt-2">
                        <span>
                          <b>Improved Scene:</b> Show a diverse group of users,
                          each sharing their personalized SkinKraft experience.
                          "Meet Anisha, who struggled with dry skin. After using
                          her customized SkinKraft regimen, her skin feels
                          hydrated and glowing. 'SkinKraft really understands my
                          skin,' she says."
                        </span>
                        <span>
                          <b>Scientific Backing:</b>
                        </span>
                        <span>
                          <b>Original Scene:</b> A brief mention of
                          dermatologists without any visual support.
                        </span>
                        <span>
                          <b>Original Transcription:</b> "SkinKraft's products
                          are recommended by dermatologists."
                        </span>
                        <span>
                          <b>Improved Scene:</b> Include a dermatologist
                          explaining the science behind SkinKraft products. "Dr.
                          Mehta, a renowned dermatologist, explains how
                          SkinKraft's unique algorithm personalizes products
                          based on your skin's needs, backed by cutting-edge
                          research."
                        </span>
                        <span>
                          <b>Interactive Elements:</b>
                        </span>
                        <span>
                          <b>Original Scene:</b> The ad ends with a simple call
                          to action to visit the website.
                        </span>
                        <span>
                          <b>Original Transcription:</b> "Visit our website to
                          get your customized skincare regimen."
                        </span>
                        <span>
                          <b>Improved Scene:</b> Incorporate an interactive
                          element like a quiz. "Discover your skin's unique
                          needs with our quick skin quiz. Visit our website to
                          get started on your personalized journey today!"
                        </span>
                      </div>
                    )}
                    <button
                      className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={toggleShowMoreSkinKraft}
                    >
                      {showMoreSkinKraft ? "View Less" : "View More"}
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b text-center font-bold border-gray-300">
                  Traya Health
                </td>
                <td className="px-7 border-b border-gray-300">
                  <ul>
                    <li className="list-disc">Celebrity Endorsement</li>
                    <li className="list-disc">Personal Story</li>
                    <li className="list-disc">Humor</li>
                    <li className="list-disc">Product Explanation</li>
                    <li className="list-disc">Visual Appeal</li>
                  </ul>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  Lack of visual comparisons and user testimonials
                </td>
                <td className="py-2 px-4 border-b border-gray-300 max-h-20 overflow-y-auto">
                  <div className="flex flex-col">
                    <span>
                      <b>Before and After Comparisons:</b>
                    </span>
                    <span>
                      <b>Original Scene:</b> Sunil Grover talks about his hair
                      care routine without showing any visual comparisons.
                    </span>
                    <span>
                      <b>Original Transcription :</b> "I've been using Traya
                      Health products and my hair feels much better."
                    </span>
                    {showMoreTraya && (
                      <div className="flex flex-col mt-2">
                        <span>
                          <b>Improved Scene:</b> Show Sunil Grover's before and
                          after hair transformation. "Watch Sunil Grover's
                          incredible hair transformation with Traya Health. From
                          thinning hair to a fuller, healthier look in just 6
                          months!"
                        </span>
                        <span>
                          <b>User Testimonials:</b>
                        </span>
                        <span>
                          <b>Original Scene:</b> Focus solely on Sunil Grover's
                          experience.
                        </span>
                        <span>
                          <b>Original Transcription:</b> "I love using Traya
                          Health products."
                        </span>
                        <span>
                          <b>Improved Scene:</b> Include testimonials from other
                          users as well. "Meet Arjun, who regained his
                          confidence with Traya Health. 'I never thought I'd see
                          such improvement,' he shares, showing his before and
                          after photos."
                        </span>
                      </div>
                    )}
                    <button
                      className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                      onClick={toggleShowMoreTraya}
                    >
                      {showMoreTraya ? "View Less" : "View More"}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImprovementTable;
