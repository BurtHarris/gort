# 🤖GORT Object Representation, Text

<span>%TOC%</span><span>

- author: [Burt Harris](https://www.linkedin.com/in/burtharris/)
- repository: <https://github.com/BurtHarris/gort>
- jargon: [recursive](http://www.catb.org/jargon/html/R/recursive-acronym.html) [retronym](https://www.lexico.com/en/definition/retronym)
- semver: [0.1-unreleased][semver]
- see also: [klaatu barada nikto](https://en.wikipedia.org/wiki/Klaatu_barada_nikto)
</span>

 **🤖GORT** is a computer language for representing knowledge which combines charactaristics of powerful modern data languages (like [CBOR][CBOR], [JSON][JSON], and [YAML][YAML]), with the ease-of-use features liaghtweight markup languages, specifically [Github Flavored Markdown (GFM)][GFM].  

 The design intent is to make 🤖GORT as **simple as possible, but no simpler** with a tip of the hat to [Albert Eienstein][simplicity].

[semver]: https://semver.org/
[CBOR]: https://cbor.io/
[JSON]: https://www.json.org/
[YAML]: https://yaml.org/
[GFM]: https://github.github.com/gfm/
[simplicity]: https://quoteinvestigator.com/2011/05/13/einstein-simple/

> Disclaimer: Yet at this point, 🤖GORT is just an idea.   This document describes the intent of the author with forward-looking statments describing features that have not yet been implemented; such statments are not intended as a financial solicitation, but if you find the concepts useful, please volunteer on the Github project site.   Feedback through issues is welcome.


## Historic context
In the classic science fiction film [*The Day the Earth Stood Still (1951)*][gort1951], **Gort** is the name of a large and mysterious alien robot policeman with nearly limitless power to halt Earth's wreckless atomic conduct.  Gort was Hollywood's first Robo Cop.

![gort2008](media/gort2008.jpg "Gort in 2008")

In the remake [*The Day the Earth Stood Still (2008)*][gort2008], the science and production values have improved substantially, and Gorts grew to massive proportions.   The character Gortremains a dispationate and disproportionate enforcer of extraterrestrial origin.  When triggered by violence, Gort's police response is quick and effective, and completely immune to defunding.

In both films of the 20th century, the character Gort lacks any sense of humor whatsoever.  Throngs of Luddites across the world found new fodder to justify their backward beleifs.  Even RoboCop seemed compassionate compared to Gort, for he was at least part human.

Perhaps in an effort to counteract the negative publicity for robots, the Unicode Consortium saw fit to pubhlish a new
Unico  
## GORT notation with 🤖, `[:|]`, and [:|] 

  [gort1951]: https://amzn.to/3v1s20M
  [gort2008]: https://amzn.to/3poRtIc
  
  
    a The **Unicode Robot Face Emoji (U+1F916 🤖) is an key part of the 🤖GORT language**, both in name and in content.  Note that different software may display the robot face with different glyphs.   GORT notation allows for humans to use either the Unicode-only emoticon or an ASCII kimoji that is more accessable on keyboards: **`[:|]`**,  while both forms is equivalent, this author beleives the Unicode symbol makes the *magic sigil* stand out, but this is a matter of personal preference.   When  write 🤖GORT, the emoji character is prefered unless, but humans may prefer using symbols that appear on their keyboards;  when software reads 🤖GORT, they should accept either emoji or kimoji.

## JSON upward compatability
  
  🤖GORT is designed to be a strict superset JSON, but not constrained by JSON's limits.  Specificly, JSON's notation for numbers, quoted strings, arrays and objects may be used, with or without an optional GORT declaration.  For example:

  ``` json
  🤖GORT // optional 
  {
    "glossary": {
        "title": "example glossary",
        "terms": [ {
            "$id": "SGML",
            "superclass": "markup language",
            "acronym": "SGML",
            "standard": "ISO 8879:1986",
            "see also": ["GML", "XML"]
            }
        ]
    }
}
```

 Note:[RFC 8259 section 9][section9] says: 

 [section9]: https://datatracker.ietf.org/doc/html/ rfc8259#section-9)
 
 >   A JSON parser transforms a JSON text into another representation.  A
   JSON parser MUST accept all texts that conform to the JSON grammar.
   A JSON parser MAY accept non-JSON forms or extensions.
## Code extension through ASCII control characters

   all other situation, the .

## Design Goals
