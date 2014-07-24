// admin commands

// requests a user
function add(i,m){
  m.twimod.bot.addFriend(i);
  m.reply("Added " + i + ".");
}

function remove(i,m){
  m.twimod.bot.removeFriend(i);
  m.reply("Removed " + i + ".");
}

function adminCommandHandler(m){

  if( m.split.length < 3 ){
    m.reply("This command takes at least 3 arguments.");
    return;
  }

  switch(m.args[0]){
    case "add":
      add(m.args[1], m);
      break;
    case "remove":
      remove(m.args[1], m);
      break;
    default:
      m.reply("Invalid command.");
  }

}

function init(twimod){
  twimod.eventHandler.registerCommand("admin", adminCommandHandler);
}

module.exports=init;
