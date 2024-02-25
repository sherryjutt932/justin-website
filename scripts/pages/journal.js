const loadMoreVar = document.querySelector("#loadMore");
const emptyVar = document.querySelector("#empty");
const allJournalsVar = Array.from(document.querySelectorAll(".journal"));
var loadMoreState = false;
var currentOption = "all";

  
function setLoadMore() {
  const optionJournals =
    currentOption === "all"
      ? allJournalsVar
      : Array.from(allJournalsVar).filter((journal) =>
          journal.classList.contains(currentOption)
        );

  if (optionJournals.length > 5) {
    optionJournals.forEach((journal, index) => {
      if (index >= 5) {
        if (!loadMoreState) {
          journal.style.display = "none";
          journal.style.opacity = 0;
        } else {
          journal.style.display = "flex";
          // journal.style.opacity = 1;

          gsap.fromTo(
            journal,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1,
              ease: "sine",
              delay: 0.1 * (index - 5),
            }
          );
        }
      } else {
        journal.style.display = "flex";
        journal.style.opacity = 1;
      }
    });
  } else {
    loadMoreVar.style.display = "none";
  }

  if (optionJournals.length <= 0) {
    emptyVar.style.display = "flex";
  } else {
    emptyVar.style.display = "none";
  }
}
setLoadMore();

function handleLoadMore() {
  loadMoreState = true;
  loadMoreVar.style.display = "none";

  
  setTimeout(() => {
      setLoadMore();
      ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
    }, 1);
}

function handleJournalOption(option) {
  currentOption = option;
  const optionJournals =
    currentOption === "all"
      ? allJournalsVar
      : Array.from(allJournalsVar).filter((journal) =>
          journal.classList.contains(currentOption)
        );

  if (optionJournals.length >= 5) {
    loadMoreVar.style.display = "flex";
    loadMoreState = false;
  } else {
    loadMoreState = true;
    loadMoreVar.style.display = "none";
  }

  if (optionJournals.length <= 0) {
    emptyVar.style.display = "flex";
  } else {
    emptyVar.style.display = "none";
  }

  optionJournals.forEach((journal, index) => {
    if (index >= 5) {
      if (!loadMoreState) {
        journal.style.display = "none";
        journal.style.opacity = 0;
      } else {
        journal.style.display = "flex";
        // journal.style.opacity = 1;

        gsap.fromTo(
          journal,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "sine",
            delay: 0.1 * (index - 5),
          }
        );
      }
    } else {
      journal.style.display = "flex";
      journal.style.opacity = 1;
    }
  });

  if (currentOption != "all") {
    const nonOptionJournals = Array.from(allJournalsVar).filter(
      (journal) => !journal.classList.contains(option)
    );

    nonOptionJournals.forEach((journal) => {
      journal.style.display = "none";
      journal.style.opacity = 0;
    });
  }

  // Optionally, update the active state of the buttons
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach((button) => {
    if (button.getAttribute("onclick").includes(option)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  setTimeout(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
  }, 10);

}
