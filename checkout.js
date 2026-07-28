document.getElementById("Pay").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const selectedGames = Array.from(document.querySelectorAll('input[name="games"]:checked')).map(el => el.value);

    if (selectedGames.length === 0) {
        alert("No Items Selected To Checkout!.");
        return;
    }

   window.location.href = "thankyou.html"
});
s