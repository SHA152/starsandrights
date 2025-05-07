/**
 * The 100 official civics questions for the U.S. Citizenship Test
 * Based on the official USCIS questions and answers
 * Last Updated: May 2025
 */

import { officialQuestions } from './officialQuestions';

// Define the main civics questions (excluding the official questions that may change)
const staticCivicsQuestions = [
  {
    id: 1,
    question: "What is the supreme law of the land?",
    answer: "The Constitution",
    notes: "The Constitution is the supreme law of the land. It established the framework of the federal government and is the highest form of law in the United States.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 2,
    question: "What does the Constitution do?",
    answer: "Sets up the government\nDefines the government\nProtects basic rights of Americans",
    notes: "The Constitution establishes the U.S. government, defines its structure and powers, and protects the basic rights of American citizens.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 3,
    question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    answer: "We the People",
    notes: "The first three words of the Constitution are 'We the People,' emphasizing that the government's power comes from its citizens.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 4,
    question: "What is an amendment?",
    answer: "A change (to the Constitution)\nAn addition (to the Constitution)",
    notes: "An amendment is a change or addition to the Constitution. The Constitution has been amended 27 times.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 5,
    question: "What do we call the first ten amendments to the Constitution?",
    answer: "The Bill of Rights",
    notes: "The first ten amendments to the Constitution are called the Bill of Rights. They were added in 1791 to protect individual liberties.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 6,
    question: "What is one right or freedom from the First Amendment?",
    answer: "Speech\nReligion\nAssembly\nPress\nPetition the government",
    notes: "The First Amendment protects several fundamental rights: freedom of speech, religion, assembly, press, and the right to petition the government.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 7,
    question: "How many amendments does the Constitution have?",
    answer: "Twenty-seven (27)",
    notes: "The Constitution has 27 amendments. The first 10 are the Bill of Rights, and the other 17 were added later.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 8,
    question: "What did the Declaration of Independence do?",
    answer: "Announced our independence (from Great Britain)\nDeclared our independence (from Great Britain)\nSaid that the United States is free (from Great Britain)",
    notes: "The Declaration of Independence, adopted on July 4, 1776, announced that the thirteen American colonies were no longer subject to British rule and were now independent states.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 9,
    question: "What are two rights in the Declaration of Independence?",
    answer: "Life\nLiberty\nPursuit of happiness",
    notes: "The Declaration of Independence states that all people have certain unalienable rights, including life, liberty, and the pursuit of happiness.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 10,
    question: "What is freedom of religion?",
    answer: "You can practice any religion, or not practice a religion.",
    notes: "Freedom of religion means that you can practice any religion you choose or no religion at all. The government cannot force you to practice a specific religion.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 11,
    question: "What is the economic system in the United States?",
    answer: "Capitalist economy\nMarket economy",
    notes: "The United States has a capitalist or market economy, where private individuals and businesses own most of the means of production and operate for profit.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 12,
    question: "What is the 'rule of law'?",
    answer: "Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law.",
    notes: "The rule of law means that everyone, including government officials, must follow the law. No one is above the law, and the law applies equally to all people.",
    category: "american-government",
    subcategory: "principles-of-american-democracy",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: true
  },
  {
    id: 13,
    question: "Name one branch or part of the government.",
    answer: "Congress\nLegislative\nPresident\nExecutive\nThe courts\nJudicial",
    notes: "The U.S. government is divided into three branches: Legislative (Congress), Executive (President), and Judicial (the courts).",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 14,
    question: "What stops one branch of government from becoming too powerful?",
    answer: "Checks and balances\nSeparation of powers",
    notes: "The system of checks and balances and separation of powers prevents any one branch of government from becoming too powerful by giving each branch certain powers over the others.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 15,
    question: "Who is in charge of the executive branch?",
    answer: "The President",
    notes: "The President of the United States is in charge of the executive branch of the federal government.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 16,
    question: "Who makes federal laws?",
    answer: "Congress\nSenate and House (of Representatives)\n(U.S. or national) legislature",
    notes: "Congress, which consists of the Senate and the House of Representatives, makes federal laws in the United States.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 17,
    question: "What are the two parts of the U.S. Congress?",
    answer: "The Senate and House (of Representatives)",
    notes: "The U.S. Congress is made up of two parts: the Senate and the House of Representatives.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 18,
    question: "How many U.S. Senators are there?",
    answer: "One hundred (100)",
    notes: "There are 100 U.S. Senators, with each state having two Senators regardless of population.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 19,
    question: "We elect a U.S. Senator for how many years?",
    answer: "Six (6)",
    notes: "U.S. Senators are elected for six-year terms. Elections are staggered so that approximately one-third of the Senate is up for election every two years.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  // Question 20 is in officialQuestions.js
  {
    id: 21,
    question: "The House of Representatives has how many voting members?",
    answer: "Four hundred thirty-five (435)",
    notes: "The House of Representatives has 435 voting members. The number of representatives from each state is based on the state's population.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 22,
    question: "We elect a U.S. Representative for how many years?",
    answer: "Two (2)",
    notes: "U.S. Representatives are elected for two-year terms. All seats in the House of Representatives are up for election every two years.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  // Question 23 is in officialQuestions.js
  {
    id: 24,
    question: "Who does a U.S. Senator represent?",
    answer: "All people of the state",
    notes: "A U.S. Senator represents all the people of their state, regardless of whether they voted for the Senator or not.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 25,
    question: "Why do some states have more Representatives than other states?",
    answer: "(Because of) the state's population\n(Because) they have more people\n(Because) some states have more people",
    notes: "States have different numbers of Representatives based on their population. States with larger populations have more Representatives in the House.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 26,
    question: "We elect a President for how many years?",
    answer: "Four (4)",
    notes: "The President of the United States is elected for a four-year term. A President can serve a maximum of two elected terms (8 years total).",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 27,
    question: "In what month do we vote for President?",
    answer: "November",
    notes: "Presidential elections are held in November, specifically on the Tuesday after the first Monday in November of years divisible by four.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  // Questions 28-29 are in officialQuestions.js
  {
    id: 30,
    question: "If the President can no longer serve, who becomes President?",
    answer: "The Vice President",
    notes: "If the President can no longer serve (due to death, resignation, or removal from office), the Vice President becomes President.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 31,
    question: "If both the President and the Vice President can no longer serve, who becomes President?",
    answer: "The Speaker of the House",
    notes: "If both the President and Vice President can no longer serve, the Speaker of the House of Representatives becomes President, according to the Presidential Succession Act.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 32,
    question: "Who is the Commander in Chief of the military?",
    answer: "The President",
    notes: "The President of the United States is the Commander in Chief of all U.S. military forces, including the Army, Navy, Air Force, Marines, and Coast Guard.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 33,
    question: "Who signs bills to become laws?",
    answer: "The President",
    notes: "The President signs bills passed by Congress to make them become laws. The President can also veto (reject) bills.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 34,
    question: "Who vetoes bills?",
    answer: "The President",
    notes: "The President has the power to veto (reject) bills passed by Congress. Congress can override a presidential veto with a two-thirds vote in both the Senate and House.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 35,
    question: "What does the President's Cabinet do?",
    answer: "Advises the President",
    notes: "The President's Cabinet advises the President on important issues and helps run the executive departments of the government.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 36,
    question: "What are two Cabinet-level positions?",
    answer: "Secretary of Agriculture\nSecretary of Commerce\nSecretary of Defense\nSecretary of Education\nSecretary of Energy\nSecretary of Health and Human Services\nSecretary of Homeland Security\nSecretary of Housing and Urban Development\nSecretary of the Interior\nSecretary of Labor\nSecretary of State\nSecretary of Transportation\nSecretary of the Treasury\nSecretary of Veterans Affairs\nAttorney General\nVice President",
    notes: "The Cabinet includes the Vice President and the heads of 15 executive departments. The applicant must name any two of these positions.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "hard",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 37,
    question: "What does the judicial branch do?",
    answer: "Reviews laws\nExplains laws\nResolves disputes (disagreements)\nDecides if a law goes against the Constitution",
    notes: "The judicial branch interprets laws, resolves legal disputes, and determines if laws violate the Constitution through a process called judicial review.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 38,
    question: "What is the highest court in the United States?",
    answer: "The Supreme Court",
    notes: "The Supreme Court is the highest court in the United States. It is the final authority on interpreting the Constitution and federal laws.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 39,
    question: "How many justices are on the Supreme Court?",
    answer: "Nine (9)",
    notes: "There are nine justices on the Supreme Court: one Chief Justice and eight Associate Justices.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 40,
    question: "Who is the Chief Justice of the United States now?",
    answer: "John Roberts",
    notes: "John Roberts is the current Chief Justice of the United States. He was appointed by President George W. Bush in 2005.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 41,
    question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    answer: "To print money\nTo declare war\nTo create an army\nTo make treaties",
    notes: "The federal government has several powers, including printing money, declaring war, creating military forces, and making treaties with other nations.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 42,
    question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    answer: "Provide schooling and education\nProvide protection (police)\nProvide safety (fire departments)\nGive a driver's license\nApprove zoning and land use",
    notes: "States have powers not granted to the federal government, including providing education, police, and fire services, issuing driver's licenses, and regulating zoning.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 43,
    question: "Who is the Governor of your state now?",
    answer: "Answers will vary. [The applicant must name the Governor of their state]",
    notes: "The applicant must name the current Governor of their state.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 44,
    question: "What is the capital of your state?",
    answer: "Answers will vary. [The applicant must name the capital of their state]",
    notes: "The applicant must name the capital city of their state.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 45,
    question: "What are the two major political parties in the United States?",
    answer: "Democratic and Republican",
    notes: "The two major political parties in the United States are the Democratic Party and the Republican Party.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 46,
    question: "What is the political party of the President now?",
    answer: "Democratic",
    notes: "The current President (as of 2025) is a member of the Democratic Party.",
    category: "american-government",
    subcategory: "system-of-government",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  // Question 47 is in officialQuestions.js
  // Question 48 is in officialQuestions.js
  {
    id: 49,
    question: "What is one responsibility that is only for United States citizens?",
    answer: "Serve on a jury\nVote in a federal election",
    notes: "U.S. citizens have specific responsibilities, including serving on juries and voting in federal elections, that non-citizens cannot do.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 50,
    question: "Name one right only for United States citizens.",
    answer: "Vote in a federal election\nRun for federal office",
    notes: "Rights reserved only for U.S. citizens include voting in federal elections and running for federal office.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 51,
    question: "What are two rights of everyone living in the United States?",
    answer: "Freedom of expression\nFreedom of speech\nFreedom of assembly\nFreedom to petition the government\nFreedom of religion\nThe right to bear arms",
    notes: "Everyone living in the United States, including non-citizens, has certain rights protected by the Constitution, including freedoms of expression, speech, assembly, petition, religion, and the right to bear arms.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 52,
    question: "What do we show loyalty to when we say the Pledge of Allegiance?",
    answer: "The United States\nThe flag",
    notes: "When saying the Pledge of Allegiance, we show loyalty to the United States and to the flag.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 53,
    question: "What is one promise you make when you become a United States citizen?",
    answer: "Give up loyalty to other countries\nDefend the Constitution and laws of the United States\nObey the laws of the United States\nServe in the U.S. military (if needed)\nServe (do important work for) the nation (if needed)\nBe loyal to the United States",
    notes: "When becoming a U.S. citizen, you promise to renounce foreign allegiances, support and defend the Constitution and laws, serve in the military if required, and be loyal to the United States.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 54,
    question: "How old do citizens have to be to vote for President?",
    answer: "Eighteen (18) and older",
    notes: "U.S. citizens must be 18 years or older to vote in federal elections, including presidential elections.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 55,
    question: "What are two ways that Americans can participate in their democracy?",
    answer: "Vote\nJoin a political party\nHelp with a campaign\nJoin a civic group\nJoin a community group\nGive an elected official your opinion on an issue\nCall Senators and Representatives\nPublicly support or oppose an issue or policy\nRun for office\nWrite to a newspaper",
    notes: "Americans can participate in democracy by voting, joining political parties, helping with campaigns, joining civic groups, contacting elected officials, expressing opinions, running for office, and more.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 56,
    question: "When is the last day you can send in federal income tax forms?",
    answer: "April 15",
    notes: "The deadline for filing federal income tax returns is April 15 each year, unless that day falls on a weekend or holiday.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 57,
    question: "When must all men register for the Selective Service?",
    answer: "At age eighteen (18)\nBetween eighteen (18) and twenty-six (26)",
    notes: "All male U.S. citizens and male immigrants, regardless of status, must register with the Selective Service System within 30 days of their 18th birthday, up until age 26.",
    category: "american-government",
    subcategory: "rights-and-responsibilities",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 58,
    question: "What is one reason colonists came to America?",
    answer: "Freedom\nPolitical liberty\nReligious freedom\nEconomic opportunity\nPractice their religion\nEscape persecution",
    notes: "Colonists came to America for various reasons, including freedom, political liberty, religious freedom, economic opportunity, and to escape persecution.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 59,
    question: "Who lived in America before the Europeans arrived?",
    answer: "American Indians\nNative Americans",
    notes: "American Indians or Native Americans lived in North America before European colonists arrived.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 60,
    question: "What group of people was taken to America and sold as slaves?",
    answer: "Africans\nPeople from Africa",
    notes: "Africans were forcibly brought to America and sold as slaves, primarily from the 17th to 19th centuries.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 61,
    question: "Why did the colonists fight the British?",
    answer: "Because of high taxes (taxation without representation)\nBecause the British army stayed in their houses (boarding, quartering)\nBecause they didn't have self-government",
    notes: "Colonists fought the British due to high taxes without representation in Parliament, forced quartering of British soldiers, and lack of self-government.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 62,
    question: "Who wrote the Declaration of Independence?",
    answer: "(Thomas) Jefferson",
    notes: "Thomas Jefferson was the principal author of the Declaration of Independence, although it was edited by the Continental Congress.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 63,
    question: "When was the Declaration of Independence adopted?",
    answer: "July 4, 1776",
    notes: "The Declaration of Independence was adopted by the Continental Congress on July 4, 1776, which is now celebrated as Independence Day.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 64,
    question: "There were 13 original states. Name three.",
    answer: "New Hampshire\nMassachusetts\nRhode Island\nConnecticut\nNew York\nNew Jersey\nPennsylvania\nDelaware\nMaryland\nVirginia\nNorth Carolina\nSouth Carolina\nGeorgia",
    notes: "The 13 original states were New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, and Georgia.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 65,
    question: "What happened at the Constitutional Convention?",
    answer: "The Constitution was written.\nThe Founding Fathers wrote the Constitution.",
    notes: "At the Constitutional Convention in Philadelphia in 1787, delegates from the states wrote and approved the U.S. Constitution.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 66,
    question: "When was the Constitution written?",
    answer: "1787",
    notes: "The Constitution was written in 1787 during the Constitutional Convention in Philadelphia.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 67,
    question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    answer: "(James) Madison\n(Alexander) Hamilton\n(John) Jay\nPubius",
    notes: "The Federalist Papers were written by James Madison, Alexander Hamilton, and John Jay under the pseudonym 'Publius' to promote ratification of the Constitution.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "hard",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 68,
    question: "What is one thing Benjamin Franklin is famous for?",
    answer: "U.S. diplomat\nOldest member of the Constitutional Convention\nFirst Postmaster General of the United States\nWriter of 'Poor Richard's Almanac'\nStarted the first free libraries",
    notes: "Benjamin Franklin was a statesman, diplomat, writer, inventor, and scientist. He is known for many accomplishments, including those listed in the acceptable answers.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 69,
    question: "Who is the 'Father of Our Country'?",
    answer: "(George) Washington",
    notes: "George Washington is often called the 'Father of Our Country' for his leadership during the American Revolution and as the first President of the United States.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 70,
    question: "Who was the first President?",
    answer: "(George) Washington",
    notes: "George Washington was the first President of the United States, serving from 1789 to 1797.",
    category: "american-history",
    subcategory: "colonial-period-and-independence",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 71,
    question: "What territory did the United States buy from France in 1803?",
    answer: "The Louisiana Territory\nLouisiana",
    notes: "The United States purchased the Louisiana Territory from France in 1803, doubling the size of the country. This is known as the Louisiana Purchase.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 72,
    question: "Name one war fought by the United States in the 1800s.",
    answer: "War of 1812\nMexican-American War\nCivil War\nSpanish-American War",
    notes: "The United States fought several wars in the 1800s, including the War of 1812, the Mexican-American War, the Civil War, and the Spanish-American War.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 73,
    question: "Name the U.S. war between the North and the South.",
    answer: "The Civil War\nThe War between the States",
    notes: "The American Civil War (1861-1865) was fought between the Northern states (the Union) and the Southern states (the Confederacy).",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 74,
    question: "Name one problem that led to the Civil War.",
    answer: "Slavery\nEconomic reasons\nStates' rights",
    notes: "The Civil War was primarily caused by disagreements over slavery, but economic differences and disputes over states' rights also contributed to the conflict.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 75,
    question: "What was one important thing that Abraham Lincoln did?",
    answer: "Freed the slaves (Emancipation Proclamation)\nSaved (or preserved) the Union\nLed the United States during the Civil War\nWritten the Gettysburg Address\nEstablished the national banking system",
    notes: "Abraham Lincoln was the 16th President of the United States. His accomplishments include issuing the Emancipation Proclamation, preserving the Union during the Civil War, and delivering the Gettysburg Address.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 76,
    question: "What did the Emancipation Proclamation do?",
    answer: "Freed the slaves\nFreed slaves in the Confederacy\nFreed slaves in the Confederate states\nFreed slaves in most Southern states",
    notes: "The Emancipation Proclamation, issued by President Lincoln in 1863, declared that all slaves in Confederate-controlled areas were to be set free.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 77,
    question: "What did Susan B. Anthony do?",
    answer: "Fought for women's rights\nFought for civil rights",
    notes: "Susan B. Anthony was a prominent civil rights activist who played a pivotal role in the women's suffrage movement, fighting for women's right to vote.",
    category: "american-history",
    subcategory: "1800s",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 78,
    question: "Name one war fought by the United States in the 1900s.",
    answer: "World War I\nWorld War II\nKorean War\nVietnam War\n(Persian) Gulf War",
    notes: "The United States fought in several wars during the 1900s, including World War I, World War II, the Korean War, the Vietnam War, and the Persian Gulf War.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 79,
    question: "Who was President during World War I?",
    answer: "(Woodrow) Wilson",
    notes: "Woodrow Wilson was the 28th President of the United States and led the country during World War I (1914-1918).",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: true
  },
  {
    id: 80,
    question: "Who was President during the Great Depression and World War II?",
    answer: "(Franklin) Roosevelt",
    notes: "Franklin D. Roosevelt (FDR) was the 32nd President of the United States and led the country during the Great Depression and most of World War II.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 81,
    question: "Who did the United States fight in World War II?",
    answer: "Japan, Germany, and Italy",
    notes: "In World War II, the United States fought against the Axis Powers: Japan, Germany, and Italy.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "medium",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 82,
    question: "Before he was President, Eisenhower was a general. What war was he in?",
    answer: "World War II",
    notes: "Dwight D. Eisenhower was a five-star general in the United States Army during World War II before becoming the 34th President of the United States.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 83,
    question: "During the Cold War, what was the main concern of the United States?",
    answer: "Communism",
    notes: "During the Cold War (1947-1991), the United States was primarily concerned with stopping the spread of communism around the world.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 84,
    question: "What movement tried to end racial discrimination?",
    answer: "Civil rights (movement)",
    notes: "The civil rights movement in the United States was a decades-long struggle to end racial discrimination and segregation and secure legal rights for African Americans.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 85,
    question: "What did Martin Luther King, Jr. do?",
    answer: "Fought for civil rights\nWorked for equality for all Americans",
    notes: "Martin Luther King, Jr. was a civil rights leader who worked for equality and an end to racial discrimination through nonviolent protest and civil disobedience.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 86,
    question: "What major event happened on September 11, 2001, in the United States?",
    answer: "Terrorists attacked the United States",
    notes: "On September 11, 2001, terrorists affiliated with al-Qaeda hijacked four commercial airplanes and carried out suicide attacks against the World Trade Center and the Pentagon.",
    category: "american-history",
    subcategory: "recent-american-history",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 87,
    question: "Name one American Indian tribe in the United States.",
    answer: "Apache\nBlackfeet\nCayuga\nCherokee\nCheyenne\nChippewa\nChoctaw\nCreek\nCrow\nHopi\nHuron\nInupiat\nLakota\nMohawk\nMohegan\nNavajo\nOneida\nOnondaga\nPueblo\nSeminole\nSeneca\nShawnee\nSioux\nTeton\nTuscarora",
    notes: "There are hundreds of federally recognized American Indian tribes in the United States. The applicant must name one from the list of acceptable answers.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  // Question 88 is in officialQuestions.js
  {
    id: 89,
    question: "What ocean is on the West Coast of the United States?",
    answer: "Pacific Ocean",
    notes: "The Pacific Ocean is on the West Coast of the United States, bordering California, Oregon, Washington, Alaska, and Hawaii.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 90,
    question: "What ocean is on the East Coast of the United States?",
    answer: "Atlantic Ocean",
    notes: "The Atlantic Ocean is on the East Coast of the United States, bordering states from Maine to Florida.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  // Question 91 is in officialQuestions.js
  {
    id: 92,
    question: "Name one state that borders Canada.",
    answer: "Maine\nNew Hampshire\nVermont\nNew York\nPennsylvania\nOhio\nMichigan\nMinnesota\nNorth Dakota\nMontana\nIdaho\nWashington\nAlaska",
    notes: "Thirteen U.S. states share a border with Canada: Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, and Alaska.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "medium",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 93,
    question: "Name one state that borders Mexico.",
    answer: "California\nArizona\nNew Mexico\nTexas",
    notes: "Four U.S. states share a border with Mexico: California, Arizona, New Mexico, and Texas.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "easy",
    is65Plus: false,
    commonlyMissed: false
  },
  {
    id: 94,
    question: "What is the capital of the United States?",
    answer: "Washington, D.C.",
    notes: "Washington, D.C. (District of Columbia) is the capital of the United States. It is not part of any state and is governed directly by the federal government.",
    category: "integrated-civics",
    subcategory: "geography",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 95,
    question: "Where is the Statue of Liberty?",
    answer: "New York (Harbor)\nLiberty Island\n[Also acceptable are New Jersey, near New York City, and on the Hudson (River)]",
    notes: "The Statue of Liberty is located on Liberty Island in New York Harbor, near New York City and New Jersey.",
    category: "integrated-civics",
    subcategory: "symbols",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 96,
    question: "Why does the flag have 13 stripes?",
    answer: "Because there were 13 original colonies\nBecause the stripes represent the original colonies",
    notes: "The American flag has 13 stripes to represent the 13 original colonies that declared independence from Great Britain.",
    category: "integrated-civics",
    subcategory: "symbols",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 97,
    question: "Why does the flag have 50 stars?",
    answer: "Because there is one star for each state\nBecause each star represents a state\nBecause there are 50 states",
    notes: "The American flag has 50 stars because each star represents one of the 50 states in the United States.",
    category: "integrated-civics",
    subcategory: "symbols",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 98,
    question: "What is the name of the national anthem?",
    answer: "The Star-Spangled Banner",
    notes: "The Star-Spangled Banner is the national anthem of the United States. It was written by Francis Scott Key in 1814 and became the official national anthem in 1931.",
    category: "integrated-civics",
    subcategory: "symbols",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 99,
    question: "When do we celebrate Independence Day?",
    answer: "July 4",
    notes: "Independence Day is celebrated on July 4 to commemorate the adoption of the Declaration of Independence on July 4, 1776.",
    category: "integrated-civics",
    subcategory: "holidays",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  },
  {
    id: 100,
    question: "Name two national U.S. holidays.",
    answer: "New Year's Day\nMartin Luther King, Jr. Day\nPresidents' Day\nMemorial Day\nJuneteenth\nIndependence Day\nLabor Day\nColumbus Day\nVeterans Day\nThanksgiving\nChristmas",
    notes: "The United States has several national holidays, including those listed in the acceptable answers. The applicant must name two of these holidays.",
    category: "integrated-civics",
    subcategory: "holidays",
    difficulty: "easy",
    is65Plus: true,
    commonlyMissed: false
  }
];

// Combine static questions with official questions that may change
export const civicsQuestions = [...staticCivicsQuestions, ...officialQuestions];

/**
 * Get all 100 civics questions
 * @returns {Array} - Array of all 100 civics questions
 */
export const getAllQuestions = () => {
  return civicsQuestions.sort((a, b) => a.id - b.id);
};

/**
 * Get questions by category
 * @param {string} category - Category ID
 * @returns {Array} - Array of questions in the specified category
 */
export const getQuestionsByCategory = (category) => {
  return civicsQuestions.filter(question => question.category === category);
};

/**
 * Get questions by subcategory
 * @param {string} subcategory - Subcategory ID
 * @returns {Array} - Array of questions in the specified subcategory
 */
export const getQuestionsBySubcategory = (subcategory) => {
  return civicsQuestions.filter(question => question.subcategory === subcategory);
};

/**
 * Get questions for seniors (65+ years and 20+ years of permanent residence)
 * @returns {Array} - Array of questions for seniors
 */
export const getQuestionsFor65Plus = () => {
  return civicsQuestions.filter(question => question.is65Plus);
};

/**
 * Get commonly missed questions
 * @returns {Array} - Array of commonly missed questions
 */
export const getCommonlyMissedQuestions = () => {
  return civicsQuestions.filter(question => question.commonlyMissed);
};

/**
 * Get questions by difficulty
 * @param {string} difficulty - Difficulty level ('easy', 'medium', or 'hard')
 * @returns {Array} - Array of questions with the specified difficulty
 */
export const getQuestionsByDifficulty = (difficulty) => {
  return civicsQuestions.filter(question => question.difficulty === difficulty);
};

/**
 * Get a random set of questions for a practice test
 * @param {number} count - Number of questions to include in the practice test
 * @returns {Array} - Array of random questions for a practice test
 */
export const getRandomQuestionsForTest = (count = 10) => {
  const shuffled = [...civicsQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
