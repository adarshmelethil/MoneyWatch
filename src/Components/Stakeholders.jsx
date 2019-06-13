import React from 'react';

class Stakeholders extends React.Component {

  render() {
    return (
      <div>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Developers</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Developers would make use of the system by creating algorithms and uploading them to our website’s marketplace. The motive behind developers creating these algorithms is because they can sell them to other stakeholders on our website in order to gain a profit. A developer would also have a profile that represents how knowledgeable they are: Education, CV, etc. The profile can also have comments of past/present customers that can comment on the quality of code/predictions that the developer created. <br/> The developer would have a good background on machine learning methods such as linear regression, dimensions reduction methods, KNN, etc. They then would use their knowledge to attempt to predict patterns in the stock. </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-secondary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Businesses/Casual Traders</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Businesses/Casual Traders would make use of the system by searching for algorithms that would allow them to have better predictions on the stock market so they could profit off them. They would search the market on our website for specific algorithm and determine a cost-benefit analysis for the potential purchase of that algorithm. They would also have access to our interactive UI to help create their domain specific algorithms as well as a dashboard to view their findings. <br/>They would have knowledge of the stock market and a understanding of the formulas behind these algorithms. </p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Researchers</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">Researchers would make use of the system by searching and creating algorithms that would allow them to further their research on a topic. They could search the market on our website for a specific algorithm and would be able to purchase the algorithms. A researcher would also have access to the developer dashboards to create and/or manipulate formulas and algorithms. Researchers would also be able to sell their finding on the market for a profit. <br/>A researcher would have a understanding of the statistics and mathematics behind machine learning. Additionally a researcher(if working) could be funded by a university institution or private institution to make these purchases.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-secondary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Sample Tasks</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4"> As a business, I want to be able to search the marketplace so that I can search for potential algorithms.</p>
                <p className="text-white-50 mb-4"> As a developer, I want to be able to sell my already built algorithms on a marketplace for others to buy.</p>
                <p className="text-white-50 mb-4"> As a trader, I want to be  able to add graphs, news, stock prices, etc on to my dashboard so that I can aggregate the information on my dashboard.</p>
                <p className="text-white-50 mb-4"> As a trader I want to be able to look at the developers profile to see their ratings, projects, and background.</p>
                <p className="text-white-50 mb-4"> As a trader, I want to be able to compare algorithms so that I can compare and contrast algorithms in order to create new and improved methods of research.</p>
                <p className="text-white-50 mb-4"> As a trader, I would like to visualize my data so that I can gain a better understanding of the stocks I am working with.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Stakeholders;
