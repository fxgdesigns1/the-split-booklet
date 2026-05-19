import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = fileURLToPath(new URL("..", import.meta.url));
const indexPath = join(root, "index.html");
const videoPath = join(root, "assets", "video", "Man_speaking_with_cigar_202605191432.mp4");
const backgroundPath = join(root, "assets", "images", "groom-shave-background.jpeg");
const pageBackgroundPath = join(root, "assets", "images", "suit-fitting-background.jpeg");

assert.ok(existsSync(indexPath), "index.html should exist");
assert.ok(existsSync(videoPath), "cover video should be stored under assets/video");
assert.ok(existsSync(backgroundPath), "background image should be stored under assets/images");
assert.ok(existsSync(pageBackgroundPath), "page background image should be stored under assets/images");

const html = readFileSync(indexPath, "utf8");

assert.match(html, /<video[^>]+id="coverVideo"[^>]+autoplay[^>]+muted[^>]+playsinline/i);
assert.match(html, /<source\s+src="assets\/video\/Man_speaking_with_cigar_202605191432\.mp4"\s+type="video\/mp4"/i);
assert.match(html, /THE SPLIT/);
assert.match(html, /SOLD OUT/);
assert.match(html, /Cockney HQ Audio Briefing/);
assert.match(html, /World Cup Launch Dispatch/);
assert.match(html, /Westfield East London meet/);
assert.match(html, /Westfield Stratford City/);
assert.match(html, /Westfield West London arrival/);
assert.match(html, /Clapham drinks link-up/);
assert.match(html, /groom-shave-background\.jpeg/);
assert.match(html, /suit-fitting-background\.jpeg/);
assert.match(html, /World Cup Launch Party/);
assert.doesNotMatch(html, /Bloco World Cup Launch Party/);
assert.match(html, /Food and drinks will be for sale on the day/);
assert.match(html, /Buy tickets for Sat 6 June/);
assert.match(html, /https:\/\/bloco\.co\.uk\/events\/world-cup-launch-party/);
assert.match(html, /id="audioToggle"/);
assert.match(html, /Open Mission Plan/);
assert.match(html, /coverVideo\.addEventListener\("ended",\s*openBook\)/);
assert.match(html, /rotateY\(-180deg\)/);
assert.match(html, /coverVideo\.currentTime\s*=\s*0/);
assert.match(html, /coverVideo\.muted\s*=\s*false/);
