
/* =====================================================
   FBA BGMI TOURNAMENT WEBSITE
   JAVASCRIPT
===================================================== */


/*
========================================================
IMPORTANT

CHANGE THIS NUMBER TO YOUR WHATSAPP NUMBER.

Example:

9876543210

becomes:

919876543210

Do NOT use:
+91
spaces
hyphens
========================================================
*/

const ORGANISER_WHATSAPP = "919181032593";



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   CURRENT DATE
===================================================== */

document.getElementById("today").textContent =
    new Intl.DateTimeFormat("en-IN", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    }).format(new Date());



/* =====================================================
   SCROLL FUNCTION
===================================================== */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({

            behavior: "smooth"

        });

}



/* =====================================================
   PAYMENT QR
===================================================== */

function openPayment() {

    document
        .getElementById("paymentModal")
        .classList.add("open");

}



/* =====================================================
   REGISTRATION WINDOW
===================================================== */

function openRegistration(
    tournament,
    fee,
    prize
) {

    document
        .getElementById("selectedTournament")
        .value = tournament;


    document
        .getElementById("regTitle")
        .textContent = tournament;


    document
        .getElementById("regFee")
        .textContent = "₹" + fee;


    document
        .getElementById("regPrize")
        .textContent = "₹" + prize;


    document
        .getElementById("registrationModal")
        .classList.add("open");

}



/* =====================================================
   CLOSE MODALS
===================================================== */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("open");

}



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal.open")
                .forEach(function(modal) {

                    modal.classList.remove("open");

                });

        }

    }
);



/* =====================================================
   WHATSAPP CONTACT BUTTON
===================================================== */

document.getElementById(
    "whatsappLink"
).href =

    "https://wa.me/" +
    ORGANISER_WHATSAPP +
    "?text=" +

    encodeURIComponent(
        "Hello FBA, I need help with a BGMI tournament registration."
    );



/* =====================================================
   REGISTRATION FORM
===================================================== */

document
    .getElementById("registrationForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /*
            ---------------------------------------------
            GET FORM VALUES
            ---------------------------------------------
            */

            const tournament =
                document
                    .getElementById(
                        "selectedTournament"
                    )
                    .value;


            const playerName =
                document
                    .getElementById(
                        "playerName"
                    )
                    .value
                    .trim();


            const bgmiId =
                document
                    .getElementById(
                        "bgmiId"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .getElementById(
                        "phone"
                    )
                    .value
                    .trim();


            const transactionId =
                document
                    .getElementById(
                        "txn"
                    )
                    .value
                    .trim();



            /*
            ---------------------------------------------
            CREATE WHATSAPP MESSAGE
            ---------------------------------------------
            */

            const message =

`FBA TOURNAMENT REGISTRATION

Tournament: ${tournament}

Player / Team Name:
${playerName}

BGMI Character ID:
${bgmiId}

WhatsApp Number:
${phone}

Payment Transaction ID:
${transactionId}

Please confirm my registration.`;



            /*
            ---------------------------------------------
            CHECK WHATSAPP NUMBER
            ---------------------------------------------
            */

            if (
                ORGANISER_WHATSAPP ===
                "919999999999"
            ) {

                alert(
                    "Please open script.js and replace ORGANISER_WHATSAPP with your actual WhatsApp number."
                );

                return;

            }



            /*
            ---------------------------------------------
            OPEN WHATSAPP
            ---------------------------------------------
            */

            window.open(

                "https://wa.me/" +
                ORGANISER_WHATSAPP +
                "?text=" +
                encodeURIComponent(message),

                "_blank"

            );

        }
    );