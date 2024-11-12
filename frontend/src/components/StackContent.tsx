import { Typography } from '@mui/material';

import { Const } from '@/const';

const StackContent = () => {
  return (
    <article>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Expectations
      </Typography>
      <Typography variant="body1">
        When you open a new browser tab, type in a URL, and press enter, your expectation is a beautifully organized
        site that loads instantly.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Requirements
      </Typography>
      <Typography variant="body1">
        My typical starting point is understanding the business outcome we aim for and selecting the technology to
        deliver the client experience.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        System Design
      </Typography>
      <Typography variant="body1">
        In order to meet delivarables and come up with scalable system, the overall system design takes place. From
        algorythmic standpoint, identifying storage solutions, centralized vs distributed, in-memory persistance both on
        the client and server, Big Data, RDBMS vs NoSQL storage, normalization and denormaliztion, treating duplication
        and backpressure, standby's and retries, use of CDN PoPs and vicinity of Data Centers and Geo Location, load
        balancing, scalability and so on...
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Front-End
      </Typography>
      <Typography variant="body1">
        Now, armed with insights from expectations, requirements, and system design, I dive into the front-end realm.
        Before I even think about visual design, I consider all the nuances that will shape the user experience. Those
        crucial first three seconds become even more potent with the groundwork laid—capturing the essence of the
        company, organizing data with precision, and ensuring a seamless and engaging journey for every visitor.
      </Typography>
      <br />
      <Typography variant="body1">
        Picture this: the first three seconds on a website are like the initial handshake—make it count, or you might
        lose your visitor. As you explore a site for the first time, those precious moments set the tone for user
        engagement.
      </Typography>
      <br />
      <Typography variant="body1">
        On the flip side, when working with an established product, it's all about fine-tuning the user experience (UX).
        This involves the art of organizing data using swift UX components and making thoughtful choices for the
        presentation layer. The key lies in how data is organized—loading seamlessly, maintaining user experience, and
        communicating vital details. Is the content loaded or loading? Is it finite, or is there more? Where are you in
        the navigational path? Do you have any saved cached data? Does your experience preload? Can you pick up a
        lengthy process right where you left off? These are the nuances that shape a user's journey and keep them
        immersed in the experience.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Back-End
      </Typography>
      <Typography variant="body1">
        As the user of front-end code is the customer, the user of back-end code is the front-end code. Understanding
        how and why the backend functions the way it does helps me better architect and optimise frontend, and vice
        versa. Where is all that data stored? Back-end is talking miliseconds, so picking the right choice for you data
        layer is crucial and requires expertise. Optimization plays a big role here so optimizing for simplicity comes
        handy to start small and grow as you need. There are so many ways to boost performance so these choices should
        be picked wisely.
      </Typography>

      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Testing
      </Typography>
      <Typography variant="body1">
        In the world of testing, I take pride in dedication to reliability and quality. I personally use Test-Driven
        Development (TDD) and Behavior-Driven Development (BDD) approaches to make the process smooth. Using the same
        mock data that shapes the backend guarantees consistency and accuracy throughout. My strategy revolves around
        small, iterative migrations that are automated and thoroughly tested with every code commit. This meticulous
        testing extends to code release and deployment, giving me confidence in the reliability of the product I'm
        crafting and refining.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pt: Const.pad / 4,
          pb: Const.pad / 8,
        }}
      >
        Harmonizing Front-End and Back-End
      </Typography>
      <Typography variant="body1">
        In the intricate dance of development, the front-end plays a pivotal role in selecting the right components.
        These components not only present information effectively but also facilitate the seamless reuse of cached data.
        Simultaneously, the back-end takes the lead in determining the schema's complexity, ensuring optimal code
        performance, and managing overall code intricacies.
      </Typography>
      <br />
      <Typography variant="body1">
        The true magic unfolds in the seamless integration of front-end and back-end elements. As I navigate from
        conceptualization to delivery, the focus is on streamlining the entire process, bringing forth benefits for both
        realms. Carefully selecting components on the front end not only ensures the reuse of cached data but also
        facilitates simultaneous work on both ends.
      </Typography>
      <br />
      <Typography variant="body1">
        This dual approach accelerates feature development, allowing a single engineer to handle backend and frontend
        code in a consolidated pull request, particularly for smaller changes. The beauty lies in the consistency of the
        contract between the frontend and backend, ensuring a well-tested front-end code and a robust back-end
        counterpart.
      </Typography>
      {/* <Typography
          variant="h5"
          sx={{
            pt: Const.pad / 4,
            pb: Const.pad / 8,
          }}
        >
          What is a Full-Stack Developer?
        </Typography>
        <Typography variant="body1">
          So is there really a full-stack role? I’d say you bet there is. Shortening the gap in communication between
          front-end and back-end teams is invaluable and it comes down to understanding and appreciating both team's
          efforts. Keeping those responsibiliteis in-sync is the key role of full-stack engineers.
        </Typography>
        <br />
        <Typography variant="body1">
          The ongoing trend of passing DevOps responsibilities down to the developers, leaves companies often in need of
          shaping hiring roles to search for candidates that combine all the skills under one hood.
        </Typography> */}
    </article>
  );
};

export default StackContent;
