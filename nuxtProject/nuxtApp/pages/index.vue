<template>
  <main>
    <v-card class="-mb-20 -border-none">
      <h2 class="content-title">
        How are <span class="-text-f-base2">y</span>ou?
      </h2>
    </v-card>
    <v-card class="-pt-10 -pr-16 -pb-10 -pl-16">
      <div class="sentence-section -mb-8 -pb-8">
        Welcome, we well deliver the news. 
      </div>
      <div class="sentence-section -mb-8 -pb-8">
        The case for President Donald Trump is simple: He made the economy work for so many Americans, kept us out of new and costly wars and even brokered peace deals in the Middle East.<br>
        He believes our taxes should be lower, not higher ― and signed into law sweeping tax relief for businesses and the vast majority of federal income tax filers. He thinks government shouldn't overregulate, rolling back numerous Obama-era overreaches, while working with his Republican allies in Congress.<br>
        And despite his relative dovishness, he has invested in our military and in the men and women who wear the uniform. As a result, our enemies know we are more than capable of finishing them. Just ask the former leader of ISIS, Abu Bakr al-Baghdadi or former Iranian General Qasem Soleimani.
      </div>
      <div class="sentence-section -mb-8 -pb-8">
        Beyond that, Trump stands up against the worst impulses of the American left and the radicals who seek to banish from the public square those who dare to think differently. Heck, even the Girl Scouts deleted a tweet congratulating Amy Coney Barrett on her elevation to the Supreme Court because of pressure from the liberal Twitter mob. Is that the kind of American we want, where unhinged progressives can shut down even a simple tweet of congrats to an accomplished female judge?<br>
        Whatever problems I have with him ― and there are more than a few ― Trump's willingness to stand up to this kind of mob impresses the hell out of me. Standing by Justice Brett Kavanaugh during a tough confirmation fight, for instance, was a particularly proud moment.<br>
        Trump is not a perfect person. His personal history, and the way he speaks to and about people can be atrocious. But Trump did become the first sitting president to attend the March for Life Rally this year, where he voiced his unwavering support for "unborn children," who he said "never had a stronger defender in the White House." Whether his views on abortion are pure or transactional, I care not. He stands up for the unborn who can't stand up for themselves ― and has appointed judges, like Barrett, who will hopefully do the same.<br>
        Elections are choices. Pro-life or pro-choice. Higher taxes or lower taxes. Support free speech or coddle censorship. No politician ever satisfies me fully, but Trump comes far closer than Joe Biden ever could.<br>
        There's room for Trump to improve, but in no way does Biden represent a step in a policy direction that I can support as a conservative. He fails the test on virtually every issue I care about, and I expect the United States would move radically left on his watch, especially on abortion.<br>
      </div>
      <div class="sentence-section card -border-none">
        And for all of the President's missteps, including his rhetorical failures in dealing with coronavirus, this vote is about the next four years. We will likely have a vaccine soon (and in large part thanks to Trump's leadership on Operation Warp Speed), and we will defeat this virus no matter who wins.<br>
        So, who can lead us through that day and beyond, restoring the American economy and stopping the radicals from tearing up the American political institutions they find inconvenient?
      </div>
    </v-card>
    <v-spacer class="-h-10"></v-spacer>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data: () => ({

  }),
}
</script>

<style lang="scss" scoped>

.sentence-section {
  border-bottom: solid 1px #444;
}
.sentence-section:first-letter {
  margin-right: 1px;
  color: $accentColor;
  font-size: 20px;
}

</style>
