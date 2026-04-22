import bcrypt from "bcrypt";

const password = process.argv[2];
if (!password) {
  console.error("Usage: npx tsx scripts/hash-password.ts <password>");
  process.exit(1);
}

bcrypt.hash(password, 12).then((hash) => {
  console.log("\nADMIN_PASSWORD_HASH=" + hash + "\n");
  console.log("Add this to your .env file or EasyPanel environment variables.");
});
