---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

<h2>Research Lines</h2>
<p><strong style="color: #808080;">Dynamic Management of Resources in HPC Environments</strong>
Dynamic Resource Management allows for dynamic changes of the resources assigned to a job during its execution. 
This discipline has gained considerable interest over the last years as it could provide many benefits to providers of HPC systems and their users, such as improving energy efficiency and throughput.

This research line is in collaborations with Technical University of Munich (TUM), Forschungszentrum Jülich (FZJ), Université Grenoble Alpes (UGA), Universidad de Zaragoza (Unizar), Universtat Jaume I (UJI), and Université Toulouse III - Paul Sabatier (TLSE3).
</p>

<p><strong style="color: #808080;">In-Network Computation and Communication Offloading</strong>
Extending the standard de facto parallel programming model OpenMP with DPU offloading capabilities (computation and communication) fully integrated in the paradigm and using the original OpenMP syntax. 
This research line has garnered interest from DPU early adopters such as Georgia Tech, Texas Tech, and Sandia National Laboratory.
</p>

<h2>Current Projects</h2>
{% for post in site.projects reversed %}
        {% assign curr_date = "now" | date: "%s" %}
        {% assign end_date = post.date | date: "%s" %}
        {% if post.my-end-date %}
            {% assign end_date = post.my-end-date | date: "%s" %}
        {% endif %}
        {% if end_date > curr_date %}
            {% include archive-single-project.html %} 
        {% endif %}
{% endfor %}

<h2> Former Projects </h2>
{% for post in site.projects reversed %}
        {% assign curr_date = "now" | date: "%s" %}
        {% assign end_date = post.date | date: "%s" %}
        {% if post.my-end-date %}
            {% assign end_date = post.my-end-date | date: "%s" %}
        {% endif %}
        {% if end_date <= curr_date %}
            {% include archive-single-project.html %} 
        {% endif %}
{% endfor %}

<hr>

<p><strong style="color: #808080;">PhD Thesis - High-Throughput Computation through Efficient Resource Management</strong>
Scientific applications run on supercomputers where thousands of nodes are shared among users. 
    When those applications start, their resources remain allocated until the job ends. 
    We have detected two potential approaches in resource managing, with which we increase the global throughput and provide a better utilization of the underlying resources.
The Dynamic Management of Resource (DMR) framework is conceived to facilitate the programmability of malleable applications automating resource reallocation, process handling, and data distribution. DMR is based on the Message Passing Interface (MPI) programming model, the standard de facto for developing HPC distributed applications. DMR adjusts the process number of the jobs depending on the cluster status in terms of resource availability and quantity of pending jobs.
Performance analyses have reported a makespan reduction of 4x, when combined with moldability, compared to traditional rigid workloads. DMR has also been used in GPU-capable workloads improving their energy efficiency up to 2.5x.
The relevance of the DMR malleability solution is such that it has been incorporated for the European projects: “The European Pilot” EuroHPC-JU, DEEP-SEA, and TimeX.</p>

<p><strong style="color: #808080;">MSc Thesis - A Remote GPU Manager for HPC Clusters</strong>
rCUDA is a virtualization solution which allows to share GPUs among the nodes in a cluster. SLURM is a workload manager able to schedule jobs and manage resources. 
    In this project I have been in charge of the integration of both technologies, 
    since RCUDA have not got the feature of managing workloads and SLURM does not know how to share resources such as GPUs. 
    Nowadays, the RCUDA project offers this integration by applying a patch to SLURM.</p>

<p><strong style="color: #808080;">Degree's Thesis - Adjusting the Energy Consumption in Computer Facilities</strong>
This project consisted in the development of a simulator to assess energy saving strategies and policies in HPC workloads. The real system Energy Saving Cluster (ESC) based on Sun Grid Engine (SGE) was modeled in order to simulate its behavior, taking into account: the different features of the components in the cluster, the scheduling and the energy saving policies and generating statistics and charts with the results. The simulator was written in Python and had a user web interface for its management.</p>