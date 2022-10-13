import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  scifi: [
    {
      name: "Dark Matter",
      rating: "4.5/5",
      description:
        "This book is about the multi-universe theory of quantum physics with a strong essence of romance which drives the story and leaves you wanting to know more. For the first 50% of the book I was hooked as the author unfolded the mystery of quantum physics and meta-verse and how our mind forms everything around you. I really loved how the author has simplified complex physics concepts like quantum physics and dark matter. It wasn’t too technical and made it a breeze reading it. Highly recommended for sci-fi and fiction readers looking for a thought-provoking read "
    },

    {
      name: "Recursion",
      rating: "4/5",
      description:
        "In Recursion, Barry Sutton is a detective with the NYPD. New York City has in the past eight months seen a new type of affliction called False Memory Syndrome that leaves its victims with strange memories of other lives.Meanwhile, Helena is a scientist whose mother has Alzheimer's, and she is working on research involving human memory and mapping the human brain.As Barry begins to investigate and his path collides with Helena's, he realizes there's a force that's shaping and twisting reality, memories and people's perceptions in ways that are terrifying and horrific in their power.They then work together to unveil this mystery and try to fix the problem which leades tp many twists and turns."
    },
    {
      name: "1984",
      rating: "4.3/5",
      description:
        " 1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of ‘the Party’, who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.‘Big Brother’ controls every aspect of people’s lives. It has invented the language ‘Newspeak’ in an attempt to completely eliminate political rebellion; created ‘Throughtcrimes’ to stop people even thinking of things considered rebellious. The party controls what people read, speak, say and do with the threat that if they disobey, they will be sent to the dreaded Room 101 as a looming punishment.In 1984 The protagonist, Winston Smith, begins a subtle rebellion against the party by keeping a diary of his secret thoughts, which is a deadly thoughtcrime. With his lover Julia, he begins a foreordained fight for freedom and justice, in a world where no one else appears to see, or dislike, the oppression the protagonist opposes. Perhaps the most powerful, effective and frightening notion of 1984 is that the complete control of an entire nation under a totalitarian state is perfectly possible. If the world fell under the control of one or even multiple dictators, the future could easily become a twisted, cruel world where every movement, word and breath is scrutinised by an omnipotent, omnipresent power that no one can stop, or even oppose without the fear of death."
    },

    {
      name: "Hyperionn",
      rating: "3.9/5",
      description:
        "Hyperion is a Hugo Award-winning science fiction novel written in 1989 by author Dan Simmons. It is the first of four books set in the fictional Hyperion universe. Over a thousand years into the future, humankind has conquered the space travel and colonized hundreds of worlds in this arm of the Milky Way. The novel then tells the story of seven individuals of different backgrounds whom are chosen to travel to the Outback planet of Hyperion as pilgrims on the Final Shrike Pilgrimage to the mysterious, ancient Time Tombs wherein lives a creature of extreme power, the Shrike As the Seven Pilgrims brave the perils and surprises of their journey on the labyrinthine world, each of them in order tell their Tales to the others, detailing their backgrounds and motives, in order to learn the reasons for which they were chosen for this Final Pilgrimage."
    },
    {
      name: "Red Rising",
      rating: "3.8/5",
      description:
        " A dystopian future packed with intelligently fabricated action, entertaining and thrilling. A brilliantly intertwining and absorbing novel with nihilistically evil and utmost narcissistic antagonists and villains.It takes up a lot of the classic sci-fi adventure and dark future/society visions adding new refreshing elements into it .Looking at the presence and past of humanity (i.e. ancient and modern ((sex)) slave workers, the red Martians as reincarnation of British coal miners in Wales in the 17th/18th century, the nowadays American military-industrial complex waging war over 'inferior nations' to bring them - well democracy - etc.  And the societal criticism is not that afar from reality: Racial divisions of mankind into cast systems, capitalistic exploitation of the weak, genetic and surgical modiciations to create the absurdly optimised 'Übermensch',  as well as consumerism and colonialism is very well written."
    }
  ],

  crime: [
    {
      name: "Sherlock holmes",
      rating: "5/5",
      description:
        "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England. After finally catching serial killer and occult 'sorcerer' Lord Blackwood, legendary sleuth Sherlock Holmes and his assistant Dr. Watson can close yet another successful case. But when Blackwood mysteriously returns from the grave and resumes his killing spree, Holmes must take up the hunt once again. Contending with his partner's new fiancée and the dimwitted head of Scotland Yard, the dauntless detective must unravel the clues that will lead him into a twisted web of murder, deceit, and black magic - and the deadly embrace of temptress Irene Adler."
    },

    {
      name: "The Devil in the white city",
      rating: "4/5",
      description:
        "The Devil in the White City is a literary nonfiction novel that spans the years surrounding the building of the 1893 Chicago World's Fair, also known as The World's Columbian Exposition, which was designed to commemorate the landing of Columbus in America. This nonlinear novel is divided into four parts with the first three parts of the novel primarily taking place in Chicago between the years 1890-1893. However, Part IV of the novel takes the reader to Philadelphia circa 1895. In The Devil in the White City, author Erik Larson uses extensive research to recreate the lives of two real men and to reinvent Chicago during the World's Columbian Exposition. In the process, he creates two separate, yet connected plot lines and attempts to fill in some of the gaps left by history. One plot line centers on Daniel Burnham, the architect who builds the 1893 Chicago World's Fair. The other plot line focuses on character H.H. Holmes, the serial killer who exploits the fair to find his victims."
    },
    {
      name: "Gone Girl",
      rating: "4/5",
      description:
        "Gone Girl by Gillian Flynn centers its story about Nick and Amy Dunne’s strained marriage relationship. Nick used to work as a journalist, but loses his job. With his broke financial status, Nick decides to relocate from New York City to his smaller home town, North Carthage.In an attempt of recovering from his financial deprivations, Nick opens a bar using the money from his wife. Nick runs the bar along with his twin sister Margo, providing a decent living for his family. But, as they days go by, his marriage with Amy is falling apart slowly. Amy resents her new life.On a summer morning in Missouri, when Nick and Amy are celebrating their fifth wedding anniversary along with their relatives and acquaintances, Amy goes missing. Police’s eyes turn towards Nick as an act of suspicion, since Nick used Amy’s money for his business and their relationship is strained. As the police delve into the investigation, different shades of stories come out from Nick’s and Amy’s sides. The suspense of the book is carried until the actual information is demystified."
    },

    {
      name: "The Silent Patient",
      rating: "4.2/5",
      description:
        "The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London.Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations—a search for the truth that threatens to consume him..."
    },
    {
      name: "In cold blood",
      rating: "3.8/5",
      description:
        "In Cold Blood is a non-fiction novel[1] by American author Truman Capote, first published in 1966. It details the 1959 murders of four members of the Clutter family in the small farming community of Holcomb, Kansas.Capote learned of the quadruple murder before the killers were captured, and he traveled to Kansas to write about the crime. He was accompanied by his childhood friend and fellow author Harper Lee, and they interviewed residents and investigators assigned to the case and took thousands of pages of notes. Killers Richard Hickock and Perry Smith were arrested six weeks after the murders and later executed by the state of Kansas. Capote ultimately spent six years working on the book."
    }
  ],
  fantasy: [
    {
      name: "The Hobbit",
      rating: "4.5/5",
      description:
        "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory. The story is told in the form of an episodic quest, and most chapters introduce a specific creature or type of creature of Tolkien's geography. Bilbo gains a new level of maturity, competence, and wisdom by accepting the disreputable, romantic, fey, and adventurous sides of his nature and applying his wits and common sense. The story reaches its climax in the Battle of Five Armies, where many of the characters and creatures from earlier chapters re-emerge to engage in conflict."
    },

    {
      name: "Harry Potter series",
      rating: "5/5",
      description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).Since the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have found immense popularity, positive reviews, and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature.[5] As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into more than eighty languages.[6] The last four books consecutively set records as the fastest-selling books in history, with the final instalment selling roughly 2.7 million copies in the United Kingdom and 8.3 million copies in the United States within twenty-four hours of its release."
    },
    {
      name: "The Name of Wind",
      rating: "3.8/5",
      description:
        "The Name of the Wind, also referred to as The Kingkiller Chronicle: Day One, is a heroic fantasy novel written by American author Patrick Rothfuss. It is the first book in the ongoing fantasy trilogy The Kingkiller Chronicle, followed by The Wise Man's Fear. It was published on March 27, 2007, by DAW Books.The Kingkiller Chronicle takes place in the fictional world of Temerant, a large continent of which the known part, called the Four Corners of Civilization, is divided into several distinct nations and cultures. Much of the world follows a faith vaguely similar to medieval Christianity. Coexisting alongside the mortal world is the realm of the Fae, a parallel universe inhabited by supernatural creatures which can move between the two realms only when the moon is full. Magic exists in Temerant, too, but obeys a well-defined set of rules and principles that can only be exploited by those who have trained in its professional and scientific use."
    },
    {
      name: "The Night Circus",
      rating: "4.1/5",
      description:
        "The Night Circus is a 2011 fantasy novel by Erin Morgenstern. It was originally written for the annual writing competition National Novel Writing Month (NaNoWriMo) over the span of three competitions.[1] The novel has a nonlinear narrative written from multiple viewpoints.The Night Circus is a phantasmagorical fairy tale set near an ahistorical Victorian London in a wandering magical circus that is open only from sunset to sunrise. Le Cirque des Rêves (The Circus of Dreams) features such wonders and 'ethereal enigmas' as a blooming garden made all of ice, acrobats soaring without a net, and a vertical cloud maze where patrons who get lost simply step off and float gently to the floor. The circus has no set schedule, appearing without warning and leaving without notice; they travel in a train disguised as an ordinary coal transport. A network of devoted fans styling themselves 'rêveurs' ('dreamers') develops around the circus; they identify to each other by adding a splash of red to garb that otherwise matches the characteristic black and white of the circus tents. The magical nature of the circus is disguised under the guise of legerdemain: the illusionist truly transforms her jacket into a raven and the fortune teller truly reads the uncertain future, and both are applauded for their ingenuity."
    },
    {
      name: "The Way Of Kings",
      rating: "3.7/5",
      description:
        "The Way of Kings is an epic fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series.The novel was published on August 31, 2010, by Tor Books. The Way of Kings consists of one prelude, one prologue, 75 chapters, an epilogue and 9 interludes.[4] It was followed by Words of Radiance in 2014,Oathbringer in 2017 and Rhythm of War in 2020. A leatherbound edition was released in 2021.In 2011, it won the David Gemmell Legend Award for best novel. The unabridged audiobook is read by narrator team Michael Kramer and Kate Readin. The story rotates between the points of view of Kaladin, Shallan Davar, Szeth-son-son-Vallano, Dalinar Kholin, Adolin Kholin, and several other minor characters, who lead seemingly unconnected lives. Szeth, a Shin man cast out by his people and condemned to obey his constantly changing masters, is sent to assassinate the king of one of the world's most powerful nations, Alethkar. As the story progresses, he continuously changes hands, doing his best to hide the fact that he possesses an Honorblade, a mythical blade used by the Heralds that can cut through any material. He also possesses access to powers that are no longer available to normal humans (“Surgebinding”), once possessed by the Knights Radiant and thought lost, making him incredibly difficult to defeat in battle."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My Best Book Recommendations </h1>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "lightblue",
              borderRadius: "2rem",
              padding: "0.5rem  2rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem",
                border: "4px solid #D1D5DB",
                width: "70%",
                margin: "1rem 3rem",
                borderRadius: "2rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.rating} </div>
              <div style={{ fontSize: "small" }}> {book.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
