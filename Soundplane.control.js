loadAPI(10);

// Remove this if you want to be able to use deprecated methods without causing script to stop.
// This is useful during development.
host.setShouldFailOnDeprecatedUse(true);

host.defineController("Madrona Labs", "Soundplane", "0.2", "29d86405-bd65-4840-aaca-61b0a4e290e8", "mattly");

host.defineMidiPorts(1, 0);

if (host.platformIsWindows())
{
   // TODO: Set the correct names of the ports for auto detection on Windows platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0", "Output Port -1"]);
}
else if (host.platformIsMac())
{
   // TODO: Set the correct names of the ports for auto detection on Mac OSX platform here
   // and uncomment this when port names are correct.
   host.addDeviceNameBasedDiscoveryPair(["Soundplane IAC out"], []);
}
else if (host.platformIsLinux())
{
   // TODO: Set the correct names of the ports for auto detection on Linux platform here
   // and uncomment this when port names are correct.
   // host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0", "Output Port -1"]);
}

function init() {
  host.getMidiInPort(0).setMidiCallback(onMidi);

  generic = host.getMidiInPort(0).createNoteInput("", "??????")
  generic.setUseExpressiveMidi(true, 0, 24)
  generic.setShouldConsumeEvents(false)

   // TODO: Perform further initialization here.
   println("Soundplane initialized!");
}

// Called when a short MIDI message is received on MIDI input port 0.
function onMidi(status, data1, data2) {
   // TODO: Implement your MIDI input handling code here.
}

function flush() {
   // TODO: Flush any output to your controller here.
}

function exit() {

}
