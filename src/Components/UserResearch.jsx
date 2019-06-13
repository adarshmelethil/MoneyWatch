import React from 'react';

class UserResearch extends React.Component {

  render() {
    return (
      <div>
      {/* <!-- Stakeholders Section --> */}
        <section class="page-section bg-primary" id="about">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                <h2 class="text-white mt-0">USER RESEARCH METHOD #1: INTERVIEWS</h2>
                <hr class="divider light my-4"/>
                <h5 class="text-white mt-0">Description</h5>
                <p class="text-white-50 mb-4">
                  The initial research method that we decided to use was an interview.
                  This was so that we would get a better idea of the problem from the 
                  perspective of a business user and tackled the question of “what is useful?”.
                  It helped us understand what the problems they faces, understand
                  their current workflow, and they’re frustrations and their desired improvements.
                  This was also beneficial to us as it provided us with a way of allowing
                  us to ask a domain expert open ended questions which led to them sharing
                  their knowledge and recommendations with us without any restrictions.
                  This proved helpful as we gathered a lot of insightful information from our
                  interviews that is applicable to bettering the usability of our application.
                  The main reason why this reaserch method was most relevant in this context
                  is because we needed direct input from domain users of the tools and functionalities
                  which will best suite them.
                </p>

                <h5 class="text-white mt-0">Findings & Conclusions</h5>
                <p class="text-white-50 mb-4">
                  Our experience with using this method has been overall lucrative as it gave
                  us information what business stats  and functionalities are relevant for our users.
                  We learned that visualizations are very helpful to making investment decisions
                  which solidified its importance in our system. We gained insights into what our
                  system will have to provide to allow the users a useful and a usable experience
                  to carry out a fundamental analysis such as P/E ratio, price to book ratio, PEG ratio ect.
                  We also learned that functionalities such as web-scraping for news which effects
                  stocks can be a very useful option to our user base along with some overall feedback
                  for our system from an abstract standpoint. Some issues we considered that weren't 
                  addressed is how to design such a service as usable as possible for our users.
                </p>
              </div>
            </div>
          </div>
        </section>




      {/* <!-- Persona Section --> */}
      <section class="page-section bg-secondary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">USER RESEARCH METHOD #2: PERSONAS</h2>
              <hr class="divider light my-4"/>
              <h5 class="text-white mt-0">Description</h5>
              <p class="text-white-50 mb-4">
                We decided a good way to compliment the other method of interviews by using personas.
                We did this because since we now have information about what is “useful” to our users,
                we now need information about how can we make it “usable” for our users to complete our
                study. In order to accomplish this we first needed to identify our users: Programmers,
                Business Investors and people with interests and capabilities in both fields.
              </p>

              <h5 class="text-white mt-0">Findings & Conclusions</h5>
              <p class="text-white-50 mb-4">
              This method requires a lot of attention to detail and forced us to ask a lot of questions about
              our target user base such as their goals, motivations and characteristics. We found this to
              be incredibly helpful and applicable into how our system should be designed. Focusing and
              tailoring different parts of our system on these personas allows us to design with cohesion
              and with purpose to satisfy our predominant user population. Overall this method is incredibly
              insightful and will prove useful in making tradeoffs as we further develop our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Reflection Section --> */}
      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">REFLECTIONS ON USER RESEARCH</h2>
              <hr class="divider light my-4"/>
              <h5 class="text-white mt-0">INTERVIEWS</h5>
              <p class="text-white-50 mb-4">
                For our first IDEO method, interviewing, there were many things that went well, and also some things
                that went poorly. One of the things that went well in our interview was getting immediate feedback
                on our project. Umair, our interviewee, shared his thoughts on our idea, which he thought was a
                great idea, specifically talking about the problems it solves. On the flip side, through the interview,
                criticism about the usability and steep learning curve were also brought up. This feedback may have been
                difficult to obtain in another IDEO method, especially in the quick and easy manner we got it in.
                One issue was Umair’s confusion on what the actual product would do, something that can be attributed
                to his weakness in technology. Another issue that arose with our interview was the ambiguity surrounding
                the questions due to our questions being a bit too general, causing our interviewee to have a tough
                time giving a specific answer. If we were to redo our interviews, one thing we would do differently would
                be to create more specific questions that force the interviewee to give specific answers. Another thing
                we can do differently is provide our interviewee with a better explanation of our project.
              </p>

              <h5 class="text-white mt-0">PERSONAS</h5>
              <p class="text-white-50 mb-4">
                Using our second method, personas, we were able to go in depth about the types of users who would use our product.
                This was very helpful, as it allowed us to gain a better understanding of the motives and attributes of
                our users. These components of users can also help illustrate solutions or issues that a potential user may face.
                Another positive that we noticed about personas was how the creation of personas clearly defined who our users
                would be. On the flip side, the usage of personas did have some negatives. One of these negatives was the fact
                that all the material we constructed in the personas was all hypothetical. The personas we created were
                inspired by our ideal users, and therefore, may only pertain to what we would want in our project. This
                can be an issue as another individual’s usage of this project may differ, and as a result, the personas
                may not fit. We can improve on this by creating personas from perspectives outside of our ideal user to get
                more point of views. Another issue that was evident when we used personas was the issue that we could not get
                immediate feedback or issues from a user, such as in an interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>
    );
  }
}

export default UserResearch;
