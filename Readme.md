# Soundplane for Bitwig

This is a [control script](https://www.bitwig.com/en/community/control_scripts.html) for [Bitwig Studio](https://bitwig.com) to enable [MPE](https://support.roli.com/support/solutions/articles/36000027933-what-is-mpe-) for the [Madrona Labs Soundplane](https://madronalabs.com/soundplane).

## Installation & Setup

This assumes you're using the [Madrona Soundplane Client](https://github.com/madronalabs/soundplane) software, which is currently supported on Macintosh. It can apparently compile on Linux but it is officially untested and I have not attempted this. This script currently assumes you're using the Mac app.

It also assumes you're using a Soundplane mapping config that outputs midi notes, such as `rows in fourths`. This is the only mapping I have tested this script with.

1. download `Soundplane.control.js` and put it in the `Documents/Bitwig Studio/Controller Scripts` directory under your home directory.

2. Launch `Soundplane` and set its MIDI output to the following:

    a. active: on
    b. bend range: if it's set to `24`, pitch bend maps to the range of the Soundplane
    c. pressure: on
    d. MPE: on
    e. device: `Soundplane IAC out`

3. In Bitwig's preferences panel, under `Settings`, `Controllers`, click `Add Controller`, find `Madrona Labs`, `Soundplane`, and click `Add`. It should find the midi port automatically.

## Mappings

- X-axis: maps to pitch/micro-pitch. If the Soundplane Client App's `bend range` parameter is set to `24` as recommended above, gldiding across notes should be seamless.
- The Y-axis maps to what Bitwig calls `TIMB` under the `Expressions` modulator.
- Pressure will map to what Bitwig calls `PRES` under the `Expressions` modulator.
