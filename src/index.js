const Mankov = require('../../mankov');

const IltaaCommander = require('./iltaa-commander');
const MoroResponder = require('./moro-responder');
const LogMonitor = require('./log-monitor');

const TG_TOKEN = process.env.MANKOV_TG_TOKEN;
const WEBHOOK_URL = process.env.MANKOV_WEBHOOK_URL;

const usePolling = (!WEBHOOK_URL) ? true : false;

// Create Mankov instance
const mankov = new Mankov();

// Attach Monitor, Commander, & Responder
mankov.addCommander(new IltaaCommander());
mankov.addResponder(new MoroResponder(100, 'juuh elikäs'));
mankov.addMonitor(new LogMonitor());

// Create Telegram-bot to that instance
mankov.createBot('telegram', 'MankovBot', { token: TG_TOKEN, optional: { webHook: !usePolling, polling: usePolling }})
.then(bot => {
  if (!usePolling) bot.client.setWebHook(WEBHOOK_URL);
});
