import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const regions = [
  { name: 'Dar es Salaam', areas: 'Headquarters and main coordination center. Coverage: Ilala, Kinondoni, Temeke, Ubungo, Kigamboni.' },
  { name: 'Coastal Zone', areas: 'Pwani (Coast Region), Morogoro, Tanga, Lindi, Mtwara — including all major coastal depots and terminals.' },
  { name: 'Northern Zone', areas: 'Arusha, Kilimanjaro, Manyara, Tanga — covering the Northern Corridor transport routes and border points.' },
  { name: 'Lake Zone', areas: 'Mwanza, Geita, Kagera, Mara, Shinyanga, Simiyu — including mining regions and Lake Victoria ports.' },
  { name: 'Central Zone', areas: 'Dodoma (Capital), Singida, Tabora — covering the central transport corridor and government fuel supply.' },
  { name: 'Southern Highlands', areas: 'Mbeya, Iringa, Njombe, Rukwa, Songwe, Ruvuma — including cross-border routes to Zambia and Malawi.' },
  { name: 'Zanzibar', areas: 'Unguja and Pemba islands — coordinated fuel logistics to all districts via mainland-to-island transport.' },
];

function OperatingTerritory() {
  const { t } = useTranslation();

  return (
    <section id="territory" className="py-20 lg:py-28 bg-navy-900 dark:bg-navy-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-display-sm font-bold text-white mb-6">
            {t('about.territoryTitle', 'Operating Territory')}
          </h2>
          <p className="text-navy-300 leading-relaxed mb-6">
            {t('about.territoryIntro', 'Petro Bridge Solutions provides nationwide petroleum logistics coordination coverage across all regions of mainland Tanzania and Zanzibar. Our strategic presence spans all major transport corridors, fuel depots, and consumption centers, ensuring no client location is beyond our reach.')}
          </p>
          <p className="text-navy-300 leading-relaxed mb-8">
            {t('about.territoryNetwork', 'Through our network of 150+ pre-qualified carriers strategically positioned across the country, we can coordinate fuel deliveries to any location — from the busiest retail stations in Dar es Salaam to the most remote mining sites in Geita, and from the port terminals in Tanga to the government facilities in Dodoma.')}
          </p>
          <div className="inline-flex items-center gap-2 bg-navy-800 border border-navy-700 rounded-xl px-5 py-3 mb-8">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <p className="text-gold-500 font-bold text-sm">{t('about.coverage', 'Nationwide Coverage')}</p>
            <span className="text-navy-400 mx-1">—</span>
            <p className="text-navy-300 text-sm">{t('about.regionsCount', 'All 31 regions of Tanzania')}</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 text-left">
            {regions.map((r) => (
              <li key={r.name} className="flex items-start gap-2 bg-navy-800 rounded-xl p-4">
                <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-navy-200 text-sm"><strong className="text-white">{r.name}</strong> — {r.areas}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default OperatingTerritory;
