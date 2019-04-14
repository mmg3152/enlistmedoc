<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card color="rgba(242, 241, 239, 0.7)">
          <v-card-title>
            <h4 class="headline">{{ english ? titleE : titleF }}</h4>
            <div style="flex-grow: 1; text-align: right;">
              <v-btn flat @click="english = true;">Enlish</v-btn>
              <v-btn flat @click="english = false;">Filipino</v-btn>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap>
                <!-- <template v-for="n in 8"> -->
                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="aids" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">AIDS & HIV</h3>
                      <p
                        class="grey--text"
                      >Acquired Immune Deficiency Syndrome (AIDS) destroys the body’s ability to fight infections and other life-threatening illnesses, according to the National Institute of Allergy and Infectious Diseases (NIAID). The virus that causes AIDS is called HIV, or Human Immunodeficiency Virus.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              When a person is first exposed to HIV, they may show no symptoms for several months or longer. Typically, however, they experience a flu-like illness that includes fever, chills, headache, fatigue, muscle aches and enlarged lymph nodes in the neck and groin areas.
                              This early illness is often followed by a “latency” phase where the virus is less active and no symptoms are present, according to the U.S. Department of Health and Human Services. This latent period can last up to a decade or more.
                              As HIV progresses into full-blown AIDS, it severely damages the immune system, causing a wide variety of symptoms such as:
                              <ul>
                                <li>Rapid weight loss or “wasting”</li>
                                <li>Extreme fatigue</li>
                                <li>Recurring fevers and night sweats</li>
                                <li>Prolonged gland swelling</li>
                                <li>Prolonged diarrhea</li>
                                <li>Sores in the mouth, genitals or anus</li>
                                <li>Pneumonia</li>
                                <li>Skin blotches</li>
                                <li>Depression, memory loss and other neurological effects</li>
                              </ul>
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              While AIDS remains incurable, patients are living much longer – even decades after infection – because of the development of many effective medications to suppress the virus. The most effective type are known as antiretroviral drugs, which are often taken in combination to prevent the patient from becoming resistant to any one drug.
                              According to the National Institutes of Health, the most common antiretroviral drugs fall into three categories:
                              <ul>
                                <li>Reverse transcriptase inhibitors, which keep the virus from reproducing</li>
                                <li>Reverse transcriptase inhibitors, which keep the virus from reproducing</li>
                                <li>Fusion inhibitors, which prevent the virus from entering healthy cells</li>
                              </ul>
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="bipolar" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Bipolar Disorder</h3>
                      <p
                        class="grey--text"
                      >Bipolar disorder is a mental health condition characterized by periods of manic and depressive episodes, interspersed with relatively normal states of mind. The unusual shifts in mood interfere with one's ability to carry out a normal daily life. In bipolar disorder, people can have overly euphoric or irritable mood, or low or depressed mood.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              Manic episodes in bipolar disorder include heightened mood (could be euphoric or irritable), flight of ideas (racing thoughts and speaking rapidly, changing from one topic to another), increased energy, decreased need for sleep and hyperactivity. During a manic episode people may become easily distracted, talk very fast, take on an unrealistic number of new projects, have an unrealistic and grandiose belief in their abilities and engage in risky behaviors, such as gambling, drug abuse, or high-risk sexual activities.
                              The average duration of the first manic episode is about three months. Manic episodes be further divided into different gradients of severity.
                              In contrast to typical major depression, the depressive episodes of bipolar disorder often occur acutely, can take place over a few weeks and without significant precipitating factors. Aside from depressed mood, depression episodes may also be accompanied by sleep problems, apathy or agitation, loss of energy, suicidal thoughts and more.
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              Currently, bipolar disorder is a lifelong recurrent illness with no available cure. However, medications and therapeutic treatments may be used to help smooth out the mood swings and related symptoms and manage bipolar disorder on a long-term basis to avoid relapse.
                              "Bipolar disorder is usually treated with mood stabilizers," Krakower said. "But in addition to medication you can have psychosocial interventions, get patients involved in the community, and also teach the family how to manage the condition.
                              Mood stabilizers such as lithium and valproate are used to prevent the extreme highs and lows. A possible side effect of lithium treatment is low thyroid levels, which has been associated with rapid mood cycles and weight gain in some people, especially women during their first two years of lithium treatment, according to a 2002 study in the Journal of Psychiatry and Neuroscience.
                              Other medications may be used to treat specific symptoms, which may include antidepressants, anticonvulsants and antipsychotics. Anticonvulsants such as valproic acid (Depakene), gabapentin (Neurontin), topiramate (Topamax) and lamotrigine (Lamictal) also act as mood stabilizers and appear to possess a broad spectrum of effectiveness, according to a 2010 review published in the journal Current Opinion in Psychiatry. However, the Food and Drug Administration and a 2010 study published in the Journal of the American Medical Association both warned that there's an increased risk of suicidal behavior among patients using seizure medication and they should be monitored for notable changes in behavior.
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="breast" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Breast Cancer</h3>
                      <p
                        class="grey--text"
                      >Breast cancer is an uncontrolled growth of cells that starts in the breast tissue. About one in eight women in the United States will develop the condition in her lifetime, according to the National Institutes of Health.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              Not everyone with breast cancer will have symptoms before they are diagnosed. But, according to the Centers for Disease Control and Prevention, possible symptoms of the disease include:
                              <ul>
                                <li>A lump in the breast or armpit</li>
                                <li>A thickening or swelling of the breast</li>
                                <li>Dimpling of the breast or skin irritation</li>
                                <li>Red or flaky skin in the nipple area</li>
                                <li>Nipple discharge other than breast milk</li>
                              </ul>It's important to note that even these symptoms don’t necessarily mean a malignancy is present and often signal a benign condition, such as a cyst or infection.
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              The treatment for breast cancer depends on the type of cancer and whether it has spread within the breast or to other parts of the body. Many people with the disease get more than one treatment, the CDC says. Treatments generally either target the cancer at its location, or target cancer cells throughout the body.
                              Local treatments include surgery and radiation, which attempt to remove or destroy the cancer in the breast without affecting the rest of the body. Surgery can include a lumpectomy — a breast-conserving surgery that that removes the tumor and part of the surrounding tissue — or the more aggressive mastectomy, which removes the entire breast and is usually done in more advanced cases, according to the National Breast Cancer Foundation.
                              Systemic treatments (which affect the entire body) are given by mouth or through the bloodstream and target cancer cells throughout the body. These include chemotherapy, which uses toxic drugs such as cyclophoshamide (sometimes referred to by its brand name, Cytoxan) or methotrexate. Cancer fueled by the hormones estrogen or progesterone can be treated with hormone suppressors such as tamoxifen or raloxifene (Evista).
                              More recent systemic treatments include biological therapy, which use the immune system to fight the cancer and targets breast cancer cells containing high levels of a certain protein. Commonly used biologics are bevacizumab (Avastin) or trastuzumab (Herceptin).
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="chicken" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Chickenpox</h3>
                      <p
                        class="grey--text"
                      >Chickenpox is a contagious disease characterized by many itchy, red bumps all over the body. Children younger than age 15 are most likely to get it, but older children and adults can become infected as well. Chickenpox (sometimes spelled chicken pox) is highly contagious and can be spread by contact with the affected areas, or by an infected person sneezing or coughing on an uninfected, unvaccinated person.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              Chickenpox, or varicella, is caused by the varicella-zoster virus, which is related to the herpes virus. The infection has three stages. It starts out with the appearance of little, itchy bumps. Those bumps turn into blisters filled with fluid. The final stage is the scabbing over of the bumps.
                              Since new bumps can appear over several days, it's possible to have all three stages of the rash at the same time. In addition to the rash, chickenpox can cause fever, headache, dry cough or loss of appetite. The illness usually lasts about 5 to 10 days. People with chickenpox are contagious starting about a day or two before their symptoms appear, and up until all of their blisters have turned to scabs, according to the CDC.
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              Healthy children typically do not require any specific medical treatment for chickenpox. But doctors may prescribe antihistamines to help stop the itching. However, if the patient falls into a high-risk group, a doctor may prescribe an antiviral like acyclovir (under brand name Zovirax) or immune globulin intravenous, known as IGIV, to take within 24 hours of the appearance of chickenpox symptoms. For adults, valacyclovir (brand name Valtrex) or famciclovir (known as Famvir) may be prescribed. Aspirin should never be given to anyone with chickenpox because the medication has been linked to a potentially fatal condition called Reye's syndrome, which causes organ damage, according to the National Institutes of Health. Taking acetaminophen (Tylenol) or ibuprofen (Advil or Motrin) can help relieve the fever associated with chickenpox.
                              There are several home remedies that may also help, such as:
                              <ul>
                                <li>Cool baths</li>
                                <li>Cool baths</li>
                                <li>Getting lots of rest.</li>
                                <li>Eating foods that don't irritate chickenpox sores that may be in or around the mouth</li>
                                <li>Wearing gloves to prevent scratching that can lead to scarring.</li>
                              </ul>
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="cholesterol" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Cholesterol Levels: High, Low, Good & Bad</h3>
                      <p
                        class="grey--text"
                      >Cholesterol is a waxy material that is produced naturally by the liver. It protects the nerves, produces hormones and makes cell tissues, according to the American Academy of Family Physicians. However, too much cholesterol can be a bad thing — which is why it's important to manage it and keep it at reasonable levels. People can check their cholesterol levels by getting a simple blood test. The test measures total cholesterol, HDL (high density lipoprotein), LDL (low density lipoprotein) and triglycerides, another type of fat in the blood stream. HDL is the "good" cholesterol that keeps LDL, the "bad" cholesterol, down, according to the American Heart Association. Too much LDL cholesterol can cause deposits known as plaque to build up in the blood vessels, which causes a decrease the amount of blood and oxygen going to the heart. This, in turn, can lead to heart disease and heart attack.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              There are really no symptoms of high cholesterol. That's why the National Heart, Lung and Blood Institute at the National Institutes of Health (NIH) recommends getting your cholesterol checked at age 20, and then every five years after that. The doctor will be able to tell if the cholesterol levels have risen too quickly and can help formulate a treatment plan.
                              Bad cholesterol levels that narrow and harden the arteries are exacerbated by a diet rich in saturated fat, being overweight or obese, and having little or no physical activity. Foods high in saturated fats include fatty beef, pork, fried foods, as well as high-fat dairy products, such as milk, butter and cheeses made of high fat, Sharma said.
                              Trans fats, which can also raise LDL cholesterol levels, can be difficult to calculate. Observant eaters can look at nutrition labels to see how many trans fats are in their diet.
                              High cholesterol is also caused, in part, by genetics. For instance, familial hypercholesterolemia, a genetic disorder, happens when the body is unable to remove LDL cholesterol from the blood
                              .
                              Age and gender are also risk factors. Women generally have lower LDL levels than men before menopause, but after menopause women's cholesterol levels tend to rise, according to the American Heart Association. Smoking and diabetes are also risk factors for high cholesterol.
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              Doctors will always recommend lifestyle changes first to treat high cholesterol, such as eating healthy foods, exercising and losing weight. However, there are medications that can help lower cholesterol, too. They include statins that are known under the brand names Lipitor, Lescol, Mevacor, Pravachol, Crestor, Zocor and Livalo.
                              Another type of medication is the bile-acid-binding resin, which includes the brand names Prevalite, Questran, Welchol and Colestid. This medication increases the liver's production of bile acids, thereby reducing the amount of cholesterol in the blood.
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="diabetes" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Type 1 Diabetes</h3>
                      <p class="grey--text">
                        Type I diabetes is a disease where the pancreas stops producing insulin, a hormone that signals the body's cells to absorb glucose from the bloodstream and convert it into energy. Type I diabetes is an autoimmune disease, occurring when the body's own immune system destroys the islet cells in the pancreas that produce insulin.
                        The disease had formerly been called "juvenile diabetes" and "insulin-dependent diabetes mellitus," but the American Diabetes Association and National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) recommended it be referred to only as Type I diabetes in 1997.
                        Type I diabetes, which accounts for about 5 percent of all cases of diabetes, according to the ADA, is typically diagnosed in younger individuals.
                      </p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              A lack of sugar in the blood cells can result in hunger, as well as fatigue. Weight loss is also a frequent symptom of Type I diabetes, as tissue will shrink without sugar being stored in it.
                              Additionally, the imbalance in sugar leads to the flow of fluid from the cells into the rest of the body. Thirst, frequent urination, blurred vision and tingling in the body's extremities can all result from this situation.
                              "What we see in children is that they start being hungry and thirsty, and they're urinating a lot," said Dr. Spyros Mezitis, an endocrinologist at Lenox Hill Hospital in New York City. "They're feeling weak, they're losing weight." Some of these symptoms can become more extreme without treatment, resulting in blindness, amputation of limbs or kidney failure, among other complications. It remains unclear what triggers the body's immune system to attack the islet cells.
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              A lack of sugar in the blood cells can result in hunger, as well as fatigue. Weight loss is also a frequent symptom of Type I diabetes, as tissue will shrink without sugar being stored in it.
                              Additionally, the imbalance in sugar leads to the flow of fluid from the cells into the rest of the body. Thirst, frequent urination, blurred vision and tingling in the body's extremities can all result from this situation.
                              "What we see in children is that they start being hungry and thirsty, and they're urinating a lot," said Dr. Spyros Mezitis, an endocrinologist at Lenox Hill Hospital in New York City. "They're feeling weak, they're losing weight." Some of these symptoms can become more extreme without treatment, resulting in blindness, amputation of limbs or kidney failure, among other complications. It remains unclear what triggers the body's immune system to attack the islet cells.
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card color="rgba(242, 241, 239, 0.7)" class="elevation-0">
                    <v-img :src="depression" alt aspect-ratio="2.75"></v-img>
                    <!-- <img :src=`@/assets/aids.png` alt> -->
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Depression</h3>
                      <p
                        class="grey--text"
                      >Depression, or major depressive disorder, is a mental health condition marked by an overwhelming feeling of sadness, isolation and despair that affects how a person thinks, feels and functions. The condition may significantly interfere with a person's daily life and may prompt thoughts of suicide. Depression isn't the same as sadness, loneliness or grief caused by a challenging life experience, such as the death of a loved one. Depression can affect people of all ages, races and socioeconomic classes, and can strike at any time. The condition is found in twice as many women as men, according to the NIMH.</p>
                    </v-card-title>
                    <v-card-text class="pt-0">
                      <v-container pa-0 grid-list-lg>
                        <v-layout row wrap justify-space-around>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? symptomsE : symptomsF }}</p>
                            <span class="caption">
                              Symptoms People with depression may experience a variety of symptoms, but most commonly, "a deep feeling of sadness or a marked loss of interest or pleasure in daily activities," according to the American Psychiatric Association. Other symptoms of depression may include:
                              <ul>
                                <li>Irritability, agitation or restlessness</li>
                                <li>Lower sex drive</li>
                                <li>Inability to focus, concentrate or make decisions</li>
                                <li>Insomnia or sleeping too much</li>
                                <li>Change in appetite and/or weight, eating too much or too little</li>
                                <li>Tiredness and lack of energy</li>
                                <li>Unexplainable crying spells</li>
                                <li>Unexplainable physical symptoms such as headaches or body aches</li>
                                <li>Feeling hopeless or worthless</li>
                                <li>Withdrawal from social situations and normal activities</li>
                                <li>Thoughts of death or suicide</li>
                              </ul>
                            </span>
                          </v-flex>
                          <v-flex xs12 md5 style="border: 1px solid grey;border-radius: 4px;">
                            <p class="font-weight-bold">{{ english ? helpE : helpF }}</p>
                            <span class="caption">
                              Depression treatment may involve psychotherapy therapy, medications, or a combination of the two.
                              <br>
                              <b>Medication:</b>
                              Prescription drugs, called antidepressants, help alter mood by affecting naturally occurring brain chemicals. There are several categories of antidepressants, but doctors often start with a class of drugs called selective serotonin reuptake inhibitors (SSRIs) and may try other medications if the patient's condition didn't improve.
                              Medications take time — usually 2 to 4 weeks — to work, and often symptoms such as appetite, concentration problems and sleep improve before people may notice mood changes, according to the National Institute of Mental Health.
                              <br>
                              <b>Psychotherapy:</b>Also known as talk therapy or counseling, this treatment has been shown to help some patients with depression. studies have suggested that combining psychotherapy and medication together works best for treating people with severe depression. Different types of psychotherapy include cognitive-behavioral therapy, which helps a person change negative thought patterns and replace them with healthier ones, as well as interpersonal therapy, which is designed to help someone understand and work through difficult relationships, according to the National Institute of Mental Health. Another form of psychotherapy is problem-solving therapy, which involves coming up with realistic solutions to cope with stressful situations.
                            </span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <!-- </template> -->
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PatientGuide",
  data() {
    return {
      english: true,
      titleE: "Patient Education",
      titleF: "Edukasyon pang Pasyente",
      symptomsE: "Symptoms",
      symptomsF: "Sintomas",
      helpE: "Helpful Tips",
      helpF: "Nakakatulong na Payo",
      aids: require("@/assets/aids.png"),
      bipolar: require("@/assets/bipolar.jpg"),
      breast: require("@/assets/breast.jpg"),
      diabetes: require("@/assets/diabetes.jpg"),
      depression: require("@/assets/depression.jpg"),
      chicken: require("@/assets/chicken.jpg"),
      cholesterol: require("@/assets/cholesterol.jpg"),
      items: [
        {
          heading: "AIDS & HIV",
          subheading:
            "Acquired Immune Deficiency Syndrome (AIDS) destroys the body’s ability to fight infections and other life-threatening illnesses, according to the National Institute of Allergy and Infectious Diseases (NIAID). The virus that causes AIDS is called HIV, or Human Immunodeficiency Virus.",
          symptoms: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
